import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { SkillLabel } from './SkillLabel';
import TextFadingComponent from './TextFadingComponent';


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
          <Typography>{children}</Typography>
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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className='px-4  lg:mb-72 mb-60 ' id='jobs'>

         <h3 className='text-[#ccd6f6] font-calibre text-4xl pb-6  '><span className='font-mono text-[#51dfc2]  text-2xl'>02.</span>Where I’ve Worked. </h3>
         <div className='grid grid-cols-10'> 
         <div className='lg:col-span-6 col-span-10'>
         <Box
       sx={{ 
        flexGrow: 1, 
        bgcolor: 'transparent', 
        display: 'flex', 
        height: 224, 
        flexDirection: { xs: 'column', sm: 'row' } 
      }}
    >
       <Tabs
          orientation={matches ? "horizontal" : "vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: matches ? 0 : 1, borderColor: 'divider', color: 'white!important', fontFamily: 'mono'}}
        >
        <Tab label="APROBATUS" {...a11yProps(0)} className="text-white font-mono" /> 
        <Tab label="CEASFOR" {...a11yProps(1)} />
        
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <h3 className='font-calibre text-[#ccd6f6] lg:-mt-3.5  lg:text-xl'>FRONTEND DEVELOPER - <span className='text-[#51cfb6] '>APROBATUS</span> </h3>
        <p className='text-[#ccd6f6] text-xs font-mono'>July 2023 - Present</p>
         <p className='text-[#aab0c4]  lg:text-lg font-calibre max-w-md mt-2' ><span className='text-[#51cfb6] pe-2'>▹</span>I was in charge of the frontend development for a website using WordPress. Utilizing Bootstrap, PHP, and JavaScript, custom fields and custom post types I collaborated with the UX and UI team and implemented achieving an optimal user experience.</p> 
         <p className='text-[#aab0c4]  lg:text-lg font-calibre max-w-md mt-2' ><span className='text-[#51cfb6] pe-2'>▹</span> I was in charge of the frontend development for a virtual campus built on Laravel. Utilizing Bootstrap for a cohesive and responsive design, I closely collaborated with the design team to ensure an optimized user experience tailored to the educational needs of the platform.</p> 
         <div className=' gap-3 text-sm font-calibre mt-2 grid-cols-4 grid'>
            <SkillLabel text="JavaScript"/> 
         <SkillLabel text="HTML"/>
         <SkillLabel text="CSS"/>
         <SkillLabel text="Wordpress"/>
         <SkillLabel text="Bootstrap"/>
         <SkillLabel text="Laravel"/>
         <SkillLabel text="Tailwind"/>
         </div>
         
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h3 className='font-calibre text-[#ccd6f6] lg:-mt-3.5  lg:text-xl'>JUNIOR FRONTEND DEVELOPER - <span className='text-[#51cfb6] '>CEASFOR</span> </h3>
        <p className='text-[#ccd6f6] text-xs font-mono'>July 2022 - June 2023</p>
         <p className='text-[#aab0c4]  lg:text-lg font-calibre max-w-md mt-2' ><span className='text-[#51cfb6] pe-2'>▹</span> I was responsible for creating numerous landing pages using HTML, CSS, Bootstrap, and TailwindCSS, ensuring optimal responsiveness and user experience across all designs. I combined modern frontend techniques with my expertise to deliver high-conversion pages tailored to specific campaign goals.</p> 
         <p className='text-[#aab0c4]  lg:text-lg font-calibre max-w-md mt-2' ><span className='text-[#51cfb6] pe-2'>▹</span>Additionally, I undertook the development and maintenance of various websites using WordPress, ensuring they were both functional and user-friendly, while also addressing any issues or updates as required for ongoing site performance.</p> 
         <div className=' gap-3 text-sm font-calibre mt-2 grid-cols-4 grid'>
        <SkillLabel text="JavaScript"/>
         <SkillLabel text="HTML"/>
         <SkillLabel text="CSS"/>
         <SkillLabel text="Wordpress"/>
         <SkillLabel text="Bootstrap"/>
         </div>
      </TabPanel>
      
    </Box>

         </div>
         <div className='lg:col-span-4 col-span-10 hidden lg:block justify-center'>
           <TextFadingComponent/>


         </div>
         </div>
    
    </section>
  );
}
