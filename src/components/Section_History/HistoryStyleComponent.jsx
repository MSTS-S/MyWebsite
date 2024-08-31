import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
/* import img */
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';
import './HistoryStyleComponent.css';

function HistoryStyleComponents({ data }) {
    return (
        <div className="HistoryContents">
            {data.map((item, index) => (
                <Timeline
                    key={index}
                    position="alternate"
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                        },
                    }}
                >
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            <div className='date'>{item.date}</div>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <item.icon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <>
                                <div className='title'>{item.title}</div>
                                <br />
                                {item.text.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        <div className='content'>
                                            {line}
                                        </div>
                                        <br />
                                    </React.Fragment>
                                ))}
                            </>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            ))}
        </div>
    );
};

export default HistoryStyleComponents;
