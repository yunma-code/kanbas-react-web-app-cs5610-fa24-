export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label> <br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of
				your Web application running on Netlify. The landing page should include
				the following: Your full name and section links to each of the lab 
				assignments Link to the Kanbas application Links to all relevant source 
				code repositories. The Kanbas application should include a link to navigate back to
				the landing page.
      </textarea>
			<br />
			<br />
      <table>
				{/* points */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        {/* assignment group */}
				<br />
				<tr>
					<td align="right" valign="top">
						<label htmlFor="wd-group">Assignment Group</label>
					</td>
					<td>
						<select id="wd-group">
							<option>ASSIGNMENT1</option>
							<option>ASSIGNMENT2</option>
							<option>ASSIGNMENT3</option>
							<option selected value="ASSIGNMENTS">
											ASSIGNMENTS</option>
							</select>
					</td>
				</tr>

				{/* display grade as */}
				<br />
				<tr>
					<td align="right" valign="top">
						<label htmlFor="wd-display-grade-as">Display Grade as</label>
					</td>
					<td>
						<select id="wd-display-grade-as">
						<option selected value="a1">
											Percentage</option>
							<option value="a2">Letter</option>
							<option value="a3">Points</option>
							</select>
					</td>
				</tr>

				{/* Submission type */}
				<br />
				<tr>
					<td align="right" valign="top">
						<label htmlFor="wd-submission-type">Submission Type</label>
					</td>
					<td>
						<select id="wd-submission-type">
						<option selected value="a1">
											Online</option>
							<option value="a2">Github</option>
							<option value="a3">GradeScope</option>
							</select>
					</td>
				</tr>

				{/* Online entry options*/}
				<tr>
					<br />
					<td align="left" valign="top">
						<br />
						<label htmlFor="wd-text-entry">Online Entry Options</label><br />

						<input type="checkbox" id="wd-text-entry"/>
						<label htmlFor="wd-text-entry">Text Entry</label><br />

						<input type="checkbox" id="wd-website-url"/>
						<label htmlFor="wd-website-url">Website URL</label><br />

						<input type="checkbox" id="wd-media-recording"/>
						<label htmlFor="wd-media-recording">Media Recordings</label><br />

						<input type="checkbox" id="wd-student-annotation"/>
						<label htmlFor="wd-student-annotation">Student Annotation</label><br />

						<input type="checkbox" id="wd-file-upload"/>
						<label htmlFor="wd-file-upload">File Uploads</label><br />
						
					</td>
				</tr>

				{/* Assign to*/}
				<tr>
					<br />
					<td align="left" valign="top">
						<br />
						<label htmlFor="wd-assign-to" >Assign to</label>
						<br />
						<input id="wd-assign-to" value="Everyone"></input>
					</td>
				</tr>

				{/* Due */}
				<tr>
					<br />
					<td align="left" valign="top">
						<br />
					<label htmlFor="wd-due-date"> Due </label>
					<input type="date"
								id="wd-text-fields-dob"
								value="2024-05-13"/><br/>
					</td>
				</tr>

				{/* Available from until */}
				<tr>
					<br />
					<td align="left" valign="top">
						<br />
						<label htmlFor="wd-available-from"> Available from </label>
						<input type="date"
								id="wd-text-fields-dob"
								value="2024-05-06"/><br/>
					</td>
					<td>
						<br />
						<label htmlFor="wd-available-until"> Until </label>
						<input type="date"
								id="wd-available-until"
								value="2024-05-20"/><br />
					</td>
				</tr>
      </table>
			<hr />
			<div style={{textAlign: "right"}}>
				<button>Cancel</button>
				<button>Save</button>
			</div>
    </div>
);}

