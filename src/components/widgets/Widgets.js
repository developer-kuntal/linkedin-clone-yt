import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
           <div className="widgets__header">
               <h2>LinkedIn News</h2>
               <InfoIcon />
           </div> 
           {newsArticle("Something is comming", "Top news - 786 readers")}
           {newsArticle("COVID-19 UK updates", "Top news - 10k readers")}
           {newsArticle("Something is comming", "Top news - 786 readers")}
           {newsArticle("COVID-19 UK updates", "Top news - 10k readers")}
           {newsArticle("Something is comming", "Top news - 786 readers")}
           {newsArticle("COVID-19 UK updates", "Top news - 10k readers")}
        </div>
    )
}

export default Widgets
