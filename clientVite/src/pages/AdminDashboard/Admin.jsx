import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Users from "./UsersTable";
import Attractions from "./AttractionsTable";
import CitiesTable from "./CitiesTable";
import CategoriesTable from "./CategoriesTable";
import Orders from "./OrdersTable";

// icons
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AttractionsOutlinedIcon from "@mui/icons-material/AttractionsOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import TransactionsTable from "./TransactionsTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "fit-content",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          icon={<PersonPinIcon />}
          iconPosition="start"
          label="Users"
          {...a11yProps(0)}
        />
        <Tab
          icon={<AttractionsOutlinedIcon />}
          iconPosition="start"
          label="Attractions"
          {...a11yProps(1)}
        />
        <Tab
          icon={<PlaceOutlinedIcon />}
          iconPosition="start"
          label="Cities"
          {...a11yProps(2)}
        />
        <Tab
          icon={<CategoryOutlinedIcon />}
          iconPosition="start"
          label="Categories"
          {...a11yProps(3)}
        />
        <Tab
          icon={<InventoryOutlinedIcon />}
          iconPosition="start"
          label="Orders"
          {...a11yProps(4)}
        />
        <Tab
          icon={<PaidOutlinedIcon />}
          iconPosition="start"
          label="Transactions"
          {...a11yProps(5)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Attractions />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CitiesTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CategoriesTable />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Orders />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TransactionsTable />
      </TabPanel>
    </Box>
  );
}