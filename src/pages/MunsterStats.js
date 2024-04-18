import React from 'react'
import YoutubeEmbed from '../components/YoutubeEmbed'

function MunsterStats() {
  return (
    <div className='project-description-container'>
      <h2>Munster Stats</h2>
      <p>Munster Stats is a Flask web application that compiles various datapoints pulled from a local PostgreSql database. Using the program you can view a brief summary of player details, such as their name, date of birth, position, points scored, match appearances etc. You can also view match reports which summarise the opponent, venue, competition, and points scored by each team, as well as the named team for Munster.</p>
      <p>The Injury Reports tab allows you to add new injuries, update existing ones, or remove current ones that have since expired. All of this causes a dynamic change in the data that appears to you on the website while concurrently carrying out SQL queries to the local database to reflect the changes that the user made on the front-end.</p>
      <p>Contracts works in much the same way as Injury Reports. Users can update, amend, and remove contract information here. Only players with existing contracts can have contracts edited, while any player can have a new contract added.</p>
      <p>Add Data is the most involved section of the site. It allows users to add new players to the database, edit existing players, and add new matches to the Match Report section. Adding a new player causes their data to appear in the Player Base section of the site, while adding new Match Reports causes the match to appear on that same Match Report section of the site.</p>
      <p>This dynamic Flask application supplies concise datapoints to the user that, with tweaks to various data fields, could be ammended to be used for not just any rugby team, but any sports team in general.</p>
      <h2>Want to have a look at the code?</h2>
      <a href='https://github.com/StephenJBall/munster-stats' target='_blank'><p>Git Hub Repository</p></a>
      <h2>Video Demo</h2>
      <YoutubeEmbed embedId='D0hPRuV6b_0'/>
    </div>
  )
}

export default MunsterStats