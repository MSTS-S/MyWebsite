import React from 'react';
/* import MUI */
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
/* import CSS */
import './AccordionStyleComponent.css';


const AccordionStyleComponent = ({ data }) => {
    const [expandedPanels, setExpandedPanels] = React.useState([]);
    const [expanded, setExpanded] = React.useState(false);

    // const handleExpansion = (panel) => (event, isExpanded) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    const handleExpansion = (panel) => (event, isExpanded) => {
        if (isExpanded) {
            setExpandedPanels((prev) => [...prev, panel]);
        } else {
            setExpandedPanels((prev) => prev.filter((p) => p !== panel));
        }
    };

    return (
        <div className='ProjectList'>
            {data.map((item, index) => {
                const isExpanded = expandedPanels.includes(item.ariaControls);
                const accordionClassName = isExpanded ? 'accordion-expanded' : 'accordion-collapsed';
                return (
                    <Accordion
                        key={index}
                        expanded={isExpanded}
                        onChange={handleExpansion(item.ariaControls)}
                        // className={accordionClassName}
                        className={`${accordionClassName} accordion-background`}

                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${item.ariaControls}-content`}
                            id={`${item.id}-header`}
                            className="accordion-background"
                        >
                            <Typography className={'Accordion-title'}>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='Accordion-date'>{'日付：' + item.date}</Typography>
                            <Typography className='Accordion-place'>{'場所：' + item.place}</Typography>
                            <Typography className='Accordion-description'>{item.description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
};

export default AccordionStyleComponent;