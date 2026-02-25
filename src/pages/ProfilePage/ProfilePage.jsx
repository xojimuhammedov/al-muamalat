import { Tab, TabList, Tabs, TabPanels, TabPanel, Box } from "@chakra-ui/react";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Courses from "./components/Courses";
import { useTranslation } from "react-i18next";

function ProfilePage() {
  const { t } = useTranslation();
  return (
    <>
      <Main />
      <div className="mx-auto flex max-w-7xl px-4 py-8">
        <Tabs>
          <TabList>
            <Tab>{t("Profile")}</Tab>
            <Tab>{t("My Courses")}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={"0"}>
              <Profile />
            </TabPanel>
            <TabPanel p={"0"}>
              <Courses />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}

export default ProfilePage;
