import React, { useState, useEffect, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { 
  MessageSquare, 
  Send, 
  User, 
  Clock, 
  Edit2, 
  Trash2, 
  ChevronDown, 
  ChevronUp,
  MessageCircle
} from "lucide-react";
import { API } from "../../../api";
import { toast } from "react-toastify";
import { formatDistanceToNow } from "date-fns";
import { uz, ru, enUS } from "date-fns/locale";

// Separate ReplyForm component for better performance and react-hook-form usage
const ReplyForm = ({ questionId, onReply, t }) => {
  const { register, handleSubmit, reset, formState: { isValid } } = useForm({
    defaultValues: { body: "" }
  });

  const onSubmit = (data) => {
    onReply(questionId, data.body);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex gap-3">
      <input
        {...register("body", { required: true, minLength: 1 })}
        type="text"
        placeholder={t("Javobingizni yozing...")}
        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#FE5D37] transition-colors"
      />
      <button
        type="submit"
        disabled={!isValid}
        className="bg-[#FE5D37] text-white p-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FE5D37]/90 transition-all"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
};

const DiscussionSection = ({ courseId, lessonId }) => {
  const { t, i18n } = useTranslation();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);
  const [replies, setReplies] = useState({});
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { control, handleSubmit, reset, setValue, formState: { isSubmitting } } = useForm({
    defaultValues: { body: "" }
  });

  const getDateLocale = () => {
    if (i18n.language === "uz") return uz;
    if (i18n.language === "ru") return ru;
    return enUS;
  };

  const fetchQuestions = useCallback(async (pageNum = 1) => {
    try {
      setLoading(true);
      const response = await API.getQuestions(courseId, pageNum);
      const newQuestions = response.data.data || [];
      
      if (pageNum === 1) {
        setQuestions(newQuestions);
      } else {
        setQuestions(prev => [...prev, ...newQuestions]);
      }
      
      setHasMore(newQuestions.length === 10);
    } catch (error) {
      console.error("Error fetching questions:", error);
      toast.error(t("Savollarni yuklashda xatolik yuz berdi"));
    } finally {
      setLoading(false);
    }
  }, [courseId, t]);

  useEffect(() => {
    fetchQuestions(1);
  }, [fetchQuestions]);

  const onSubmitQuestion = async (data) => {
    if (!data.body.replace(/<[^>]*>/g, '').trim()) {
      toast.warning(t("Iltimos, savol matnini kiriting"));
      return;
    }

    try {
      if (editingQuestion) {
        await API.updateQuestion(editingQuestion.id, { body: data.body });
        toast.success(t("Savol muvaffaqiyatli tahrirlandi"));
      } else {
        await API.createQuestion({
          course_id: courseId,
          lesson_id: lessonId,
          body: data.body
        });
        toast.success(t("Savol muvaffaqiyatli yuborildi"));
      }
      reset({ body: "" });
      setShowForm(false);
      setEditingQuestion(null);
      fetchQuestions(1);
    } catch (error) {
      console.error("Error submitting question:", error);
      toast.error(t("Xatolik yuz berdi"));
    }
  };

  const handleDeleteQuestion = async (id) => {
    if (window.confirm(t("Haqiqatan ham ushbu savolni o'chirmoqchimisiz?"))) {
      try {
        await API.deleteQuestion(id);
        setQuestions(questions.filter(q => q.id !== id));
        toast.success(t("Savol o'chirildi"));
      } catch (error) {
        toast.error(t("O'chirishda xatolik"));
      }
    }
  };

  const toggleReplies = async (questionId) => {
    if (expandedQuestionId === questionId) {
      setExpandedQuestionId(null);
      return;
    }

    setExpandedQuestionId(questionId);
    if (!replies[questionId]) {
      try {
        const response = await API.getQuestionDetail(questionId);
        setReplies(prev => ({
          ...prev,
          [questionId]: response.data.replies || []
        }));
      } catch (error) {
        console.error("Error fetching replies:", error);
      }
    }
  };

  const handleReply = async (questionId, body) => {
    try {
      const response = await API.createReply(questionId, { body });
      setReplies(prev => ({
        ...prev,
        [questionId]: [...(prev[questionId] || []), response.data]
      }));
      toast.success(t("Javob yuborildi"));
    } catch (error) {
      toast.error(t("Xatolik yuz berdi"));
    }
  };

  const handleDeleteReply = async (questionId, replyId) => {
    if (window.confirm(t("Javobni o'chirmoqchimisiz?"))) {
      try {
        await API.deleteReply(replyId);
        setReplies(prev => ({
          ...prev,
          [questionId]: prev[questionId].filter(r => r.id !== replyId)
        }));
        toast.success(t("Javob o'chirildi"));
      } catch (error) {
        toast.error(t("Xatolik yuz berdi"));
      }
    }
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'clean']
    ],
  };

  return (
    <div className="mt-12 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-slide-down">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FE5D37]/10 flex items-center justify-center text-[#FE5D37]">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">{t("Muhokamalar")}</h3>
            <p className="text-sm text-slate-500">{t("Savollaringizni bering va javob oling")}</p>
          </div>
        </div>
        <button
          onClick={() => {
            if (showForm) {
              setShowForm(false);
              setEditingQuestion(null);
              reset({ body: "" });
            } else {
              setShowForm(true);
            }
          }}
          className="bg-[#FE5D37] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-[#FE5D37]/20 hover:bg-[#FE5D37]/90 transition-all active:scale-95"
        >
          {showForm ? t("Bekor qilish") : t("Savol berish")}
        </button>
      </div>

      <div className="p-6">
        {showForm && (
          <form onSubmit={handleSubmit(onSubmitQuestion)} className="mb-8 bg-slate-50 rounded-2xl p-4 border border-slate-200 animate-slide-down">
            <Controller
              name="body"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <ReactQuill 
                  theme="snow"
                  value={field.value}
                  onChange={field.onChange}
                  modules={quillModules}
                  placeholder={t("Savolingizni bu yerga yozing...")}
                  className="bg-white rounded-xl mb-4 overflow-hidden"
                />
              )}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[#FE5D37] text-white px-6 py-2.5 rounded-xl font-bold transition-all hover:gap-3 disabled:opacity-50"
              >
                {editingQuestion ? t("Saqlash") : t("Yuborish")}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {loading && questions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div className="w-12 h-12 border-4 border-[#FE5D37]/20 border-t-[#FE5D37] rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium">{t("Yuklanmoqda...")}</p>
          </div>
        ) : questions.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-slate-300" />
            </div>
            <h4 className="text-slate-900 font-bold mb-1">{t("Hozircha savollar yo'q")}</h4>
            <p className="text-slate-500 text-sm">{t("Birinchi bo'lib savol bering!")}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {questions.map((question) => (
              <div key={question.id} className="group border border-slate-100 rounded-2xl p-5 hover:border-slate-200 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 border border-slate-200">
                    {question.user?.avatar ? (
                      <img src={question.user.avatar} alt="" className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <User className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-bold text-slate-900 truncate">
                        {question.user?.full_name || t("Foydalanuvchi")}
                      </h5>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDistanceToNow(new Date(question.created_at), { addSuffix: true, locale: getDateLocale() })}
                        </span>
                        {question.is_owner && (
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => {
                                setEditingQuestion(question);
                                setValue("body", question.body);
                                setShowForm(true);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDeleteQuestion(question.id)}
                              className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div 
                      className="text-slate-600 prose prose-slate max-w-none prose-sm mb-4"
                      dangerouslySetInnerHTML={{ __html: question.body }}
                    />
                    
                    <button 
                      onClick={() => toggleReplies(question.id)}
                      className="flex items-center gap-2 text-sm font-bold text-[#FE5D37] hover:underline"
                    >
                      <MessageSquare className="w-4 h-4" />
                      {question.replies_count || 0} {t("javoblar")}
                      {expandedQuestionId === question.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {expandedQuestionId === question.id && (
                      <div className="mt-6 pl-4 border-l-2 border-slate-100 space-y-4 animate-slide-down">
                        {replies[question.id]?.map((reply) => (
                          <div key={reply.id} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-100">
                                  <User className="w-4 h-4 text-slate-400" />
                                </div>
                                <span className="text-sm font-bold text-slate-900">
                                  {reply.user?.full_name || t("Foydalanuvchi")}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] text-slate-400">
                                  {formatDistanceToNow(new Date(reply.created_at), { addSuffix: true, locale: getDateLocale() })}
                                </span>
                                {reply.is_owner && (
                                  <button 
                                    onClick={() => handleDeleteReply(question.id, reply.id)}
                                    className="p-1 text-slate-400 hover:text-red-500"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="text-sm text-slate-600">
                              {reply.body}
                            </div>
                          </div>
                        ))}

                        <ReplyForm 
                          questionId={question.id} 
                          onReply={handleReply} 
                          t={t} 
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {hasMore && (
              <button
                onClick={() => {
                  const nextPage = page + 1;
                  setPage(nextPage);
                  fetchQuestions(nextPage);
                }}
                className="w-full py-4 text-slate-500 font-bold hover:text-[#FE5D37] transition-colors border-t border-slate-50 mt-4"
              >
                {loading ? t("Yuklanmoqda...") : t("Ko'proq yuklash")}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscussionSection;
