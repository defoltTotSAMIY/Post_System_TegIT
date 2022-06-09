import React from "react"
import "./DotsModal.scss"

function DotsModal() {
	function clickEdit(e) {
		e.target.parentNode.parentNode.querySelector("ul").classList.toggle("openEdit")
	}
	return (
		<div>
			{/* <span onClick={clickEdit} >
				<i className='bx bx-dots-horizontal-rounded '></i>
			</span> */}
			<ul className='EditDelet openEdit'>
				<li>
					<i className='bx bxs-edit-alt editm '>Edit</i>
				</li>
				<hr />
				<li>
					<i className='bx bxs-message-x editm'>Delete</i>
				</li>
			</ul>

		</div>
	)
}

export default DotsModal