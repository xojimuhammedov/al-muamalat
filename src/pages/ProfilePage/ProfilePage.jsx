import { Tab, TabList, Tabs, TabPanels, TabPanel, Box } from "@chakra-ui/react";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Courses from "./components/Courses";

function ProfilePage() {
  return (
    <>
      <Main />
      <Box py={"2rem"} className="container">
        <Tabs>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>My Courses</Tab>
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
      </Box>
    </>
  );
}

export default ProfilePage;
