import Section from "./components/Section";

function CouncilPage() {
  return (
    <>
      <Section />
    </>
  );
}

export default CouncilPage;

const css = {
  item: {
    width: "100%",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
  },
  title: {
    fontSize: "22px",
    color: "#103741",
  },
  text: {
    fontSize: "16px",
    marginTop: "10px",
  },
};
