import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap'
import calculateTaxIncome from './helpers/taxCalculator'
import calculateSuperannuation from './helpers/superannuationCalculator'

function Onboarding() {
	// State manament - initial state / static state
	const employmentStartDate = '20/06/2023'
	const jobTitle = 'Accounting Manager'
	const workSchedule = 'Full-time'
	const role = 'Manager'
	const defaultSalary = 90000
	const defaultSuperannuationPercentage = 0.105

	// State manament - dynamic state

	const [showModal, setShowModal] = useState(false)
	// Personal details
	const [name, setName] = useState('')
	const [address, setAddress] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [email, setEmail] = useState('')
	const [dateOfBirth, setDateOfBirth] = useState('')
	const [taxFileNumber, setTaxFileNumber] = useState('')

	// Superannuation
	const [
		superannuationFundName,
		setSuperannuationFundName,
	] = useState('')
	const [membershipNumber, setMembershipNumber] =
		useState('')
	const [fundABN, setFundABN] = useState('')

	// Bank details
	const [bankName, setBankName] = useState('')
	const [BSBNumber, setBSBNumber] = useState('')
	const [accountNumber, setAccountNumber] = useState('')

	// Emergency Contact
	const [emergencyContactName, setEmergencyContactName] =
		useState('')
	const [
		emergencyContactRelationship,
		setEmergencyContactRelationship,
	] = useState('')
	const [
		emergencyContactPhoneNumber,
		setEmergencyContactPhoneNumber,
	] = useState('')

	// Policies and Procedures
	const [
		agreeWithPoliciesAndProcedures,
		setAgreeWithPoliciesAndProcedures,
	] = useState('')

	// Workplace Health and Safety
	const [workplaceConcerns, setWorkplaceConcerns] =
		useState('')

	// Employment Information
	const [salary, setSalary] = useState(defaultSalary)
	const [annualSuperannuation, setAnnualSuperannuation] =
		useState(0)
	const [annualTaxIcome, setAnnualTaxIcome] = useState(0)

	// Employment Eligibility
	const [
		employmentEligibility,
		setEmploymentEligibility,
	] = useState('Condition not selected')
	const [
		employmentEligibilityProof,
		setEmploymentEligibilityProof,
	] = useState(null)

	//Tax Declaration
	const [tfnDeclaration, setTfnDeclaration] =
		useState(null)
	const [taxWithholdingForm, setTaxWithholdingForm] =
		useState(null)

	// Handle close modal
	const handleCloseModal = () => {
		setShowModal(false)
	}
	// Handle salary input changes
	const handleSalaryChange = (e) => {
		setSalary(e.target.value)
		setAnnualSuperannuation(
			calculateSuperannuation(
				e.target.value,
				defaultSuperannuationPercentage
			)
		)
		setAnnualTaxIcome(
			calculateTaxIncome(e.target.value)
		)
	}

	// Handle proof of employment
	const handleProofOfEmployment = (event) => {
		const selectedFile = event.target.files[0]
		const reader = new FileReader()
		reader.onload = () => {
			const fileContents = reader.result
			setEmploymentEligibilityProof({
				name: selectedFile.name,
				contents: fileContents,
			})
		}
		reader.readAsText(selectedFile)
	}

	// Handle proof of employment
	const handleTfnDeclaration = (event) => {
		const selectedFile = event.target.files[0]
		const reader = new FileReader()
		reader.onload = () => {
			const fileContents = reader.result
			setTfnDeclaration({
				name: selectedFile.name,
				contents: fileContents,
			})
		}
		reader.readAsText(selectedFile)
	}

	// Handle proof of employment
	const handleTaxWithholdingForm = (event) => {
		const selectedFile = event.target.files[0]
		const reader = new FileReader()
		reader.onload = () => {
			const fileContents = reader.result
			setTaxWithholdingForm({
				name: selectedFile.name,
				contents: fileContents,
			})
		}
		reader.readAsText(selectedFile)
	}

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault()
		setShowModal(true)
	}

	useEffect(() => {
		setAnnualSuperannuation(
			calculateSuperannuation(
				defaultSalary,
				defaultSuperannuationPercentage
			)
		)
		setAnnualTaxIcome(calculateTaxIncome(defaultSalary))
	}, [])

	return (
		<div className='container mt-5'>
			<h1 className='text-center'>
				Cloudcase Onboarding
			</h1>
			<Form onSubmit={handleSubmit}>
				<div className='d-flex flex-row flex-wrap justify-content-around'>
					<div className='col-5'>
						<section className='mt-5'>
							<h3>Personal details</h3>
							<Form.Group className='mb-3'>
								<Form.Label>
									Name
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter your Full Name'
									onChange={(e) =>
										setName(
											e.target.value
										)
									}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Address
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter your Address'
									onChange={(e) =>
										setAddress(
											e.target.value
										)
									}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Phone Number
								</Form.Label>
								<Form.Control
									type='tel'
									placeholder='Enter your Phone Number'
									onChange={(e) =>
										setPhoneNumber(
											e.target.value
										)
									}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Email
								</Form.Label>
								<Form.Control
									type='email'
									placeholder='Enter your Email'
									onChange={(e) =>
										setEmail(
											e.target.value
										)
									}
								/>
								<Form.Text className='text-muted'>
									We'll never share your
									email with anyone else.
								</Form.Text>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Date Of Birth
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter your Date Of Birth'
									onChange={(e) =>
										setDateOfBirth(
											e.target.value
										)
									}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Tax File Number
								</Form.Label>
								<Form.Control
									type='number'
									placeholder='Enter your Tax File Number'
									onChange={(e) =>
										setTaxFileNumber(
											e.target.value
										)
									}
								/>
							</Form.Group>
						</section>
						<section className='mt-5'>
							<h3>Bank details</h3>
							<Form.Group className='mb-3'>
								<Form.Label>
									Bank Name
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter your Bank Name'
									onChange={(e) =>
										setBankName(
											e.target.value
										)
									}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									BSB Number
								</Form.Label>
								<Form.Control
									type='number'
									placeholder='Enter your BSB Number'
									onChange={(e) =>
										setBSBNumber(
											e.target.value
										)
									}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Account Number
								</Form.Label>
								<Form.Control
									type='number'
									placeholder='Enter your Account Number'
									onChange={(e) =>
										setAccountNumber(
											e.target.value
										)
									}
								/>
							</Form.Group>
						</section>

						<section className='mt-5'>
							<h3>Superannuation</h3>
							<Form.Group className='mb-3'>
								<Form.Label>
									Superannuation Fund Name
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter Superannuation Fund Name'
									onChange={(e) =>
										setSuperannuationFundName(
											e.target.value
										)
									}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Membership Number
								</Form.Label>
								<Form.Control
									type='number'
									placeholder='Enter Membership Number'
									onChange={(e) =>
										setMembershipNumber(
											e.target.value
										)
									}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Fund ABN
								</Form.Label>
								<Form.Control
									type='number'
									placeholder='Enter Fund ABN'
									onChange={(e) =>
										setFundABN(
											e.target.value
										)
									}
								/>
							</Form.Group>
						</section>

						<section className='mt-5'>
							<h3>Tax Declaration</h3>
							<Form.Label>
								Employee Tax File Number
								Declaration
							</Form.Label>
							<div className='mb-3'>
								<input
									className='form-control'
									type='file'
									id='tfnDeclaration'
									onChange={
										handleTfnDeclaration
									}
								/>
							</div>
							<Form.Label>
								Tax Withholding Form
							</Form.Label>
							<div className='mb-3'>
								<input
									className='form-control'
									type='file'
									id='taxWithholdingForm'
									onChange={
										handleTaxWithholdingForm
									}
								/>
							</div>
						</section>
					</div>
					<div className='col-5'>
						<section className='mt-5'>
							<h3>Employment Information</h3>
							<Form.Group className='mb-3'>
								<Form.Label>
									Employment start date
								</Form.Label>
								<Form.Control
									type='text'
									defaultValue={
										employmentStartDate
									}
									disabled
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Job Title
								</Form.Label>
								<Form.Control
									type='text'
									defaultValue={jobTitle}
									disabled
								/>
							</Form.Group>

							<Form.Group className='mb-3'>
								<Form.Label>
									Salary
								</Form.Label>
								<InputGroup className='mb-3'>
									<InputGroup.Text>
										$
									</InputGroup.Text>
									<Form.Control
										type='number'
										defaultValue={
											salary
										}
										onChange={
											handleSalaryChange
										}
									/>{' '}
									<InputGroup.Text>
										.00
									</InputGroup.Text>
								</InputGroup>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Annual Tax Income
								</Form.Label>
								<InputGroup className='mb-3'>
									<InputGroup.Text>
										$
									</InputGroup.Text>
									<Form.Control
										type='number'
										value={
											annualTaxIcome
										}
										disabled
									/>
									<InputGroup.Text>
										.00
									</InputGroup.Text>
								</InputGroup>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Superannuation
								</Form.Label>
								<InputGroup className='mb-3'>
									<InputGroup.Text>
										$
									</InputGroup.Text>
									<Form.Control
										type='number'
										value={
											annualSuperannuation
										}
										disabled
									/>
									<InputGroup.Text>
										.00
									</InputGroup.Text>
								</InputGroup>

								<Form.Text className='text-muted'>
									{
										'The current super guarantee percentage is 10.5% (FY23)'
									}
								</Form.Text>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Work Schedule
								</Form.Label>
								<Form.Control
									type='text'
									defaultValue={
										workSchedule
									}
									disabled
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Role
								</Form.Label>
								<Form.Control
									type='text'
									defaultValue={role}
									disabled
								/>
							</Form.Group>
						</section>

						<section className='mt-5'>
							<h3>Employment Eligibility</h3>
							<Form.Group className='mb-3'>
								<Form.Label>
									Which of the following
									statements best
									describes your right to
									work in Australia?
								</Form.Label>
								<Form.Select
									aria-label='Default select example'
									onChange={(e) => {
										console.log(
											e.target.value
										)
										setEmploymentEligibility(
											e.target.value
										)
									}}
								>
									<option value='Condition not selected'>
										Select
									</option>
									<option value='Australian citizen'>
										I'm an Australian
										citizen
									</option>
									<option value='Permanent resident'>
										I'm a permanent
										resident and/or NZ
										citizen
									</option>
									<option value='Work visa'>
										I have a graduate
										temporary work visa
									</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Proof of work
									eligibility
								</Form.Label>
								<div className='mb-3'>
									<input
										className='form-control'
										type='file'
										id='formFile'
										onChange={
											handleProofOfEmployment
										}
									/>
								</div>
							</Form.Group>
						</section>

						<section className='mt-5'>
							<h3>Policies and Procedures</h3>

							<Form.Group
								className='mb-3'
								controlId='formBasicCheckbox'
							>
								<Form.Check
									onChange={(e) =>
										setAgreeWithPoliciesAndProcedures(
											e.target.value
										)
									}
									type='checkbox'
									label='I have read and agree with the company policies and procedures, including Code of Conduct, Workplace Health and Safety, Anti-Discrimination, etc'
								/>
							</Form.Group>
						</section>

						<section className='mt-5'>
							<h3>
								Workplace Health and Safety
							</h3>
							<Form.Group className='mb-3'>
								<Form.Label>
									Do you have any
									workplace health and
									safety concerns or
									requirements?
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter any workplace health and safety concerns'
									onChange={(e) =>
										setWorkplaceConcerns(
											e.target.value
										)
									}
								/>
							</Form.Group>
						</section>

						<section className='mt-5'>
							<h3>Emergency Contact</h3>
							<Form.Group className='mb-3'>
								<Form.Label>
									Name
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter Name'
									onChange={(e) =>
										setEmergencyContactName(
											e.target.value
										)
									}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Relationship
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter Relationship'
									onChange={(e) =>
										setEmergencyContactRelationship(
											e.target.value
										)
									}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>
									Phone Number
								</Form.Label>
								<Form.Control
									type='number'
									placeholder='Enter Phone Number'
									onChange={(e) =>
										setEmergencyContactPhoneNumber(
											e.target.value
										)
									}
								/>
							</Form.Group>
						</section>
					</div>
				</div>
				<div className='d-grid gap-2 m-5'>
					<Button
						size='lg'
						variant='primary'
						type='submit'
					>
						Submit
					</Button>
				</div>
			</Form>
			<Modal
				show={showModal}
				onHide={handleCloseModal}
				dialogClassName='modal-90w'
			>
				<Modal.Header closeButton>
					<Modal.Title>Form Data</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h5>Personal details</h5>
					<p>Name: {name}</p>
					<p>Address: {address}</p>
					<p>Phone Number: {phoneNumber}</p>
					<p>Email: {email}</p>
					<p>Date Of Birth: {dateOfBirth}</p>
					<p>Tax File Number: {taxFileNumber}</p>
					<hr />
					<h5>Bank details</h5>
					<p>Bank Name: {bankName}</p>
					<p>BSB Number: {BSBNumber}</p>
					<p>Account Number: {accountNumber}</p>
					<hr />
					<h5>Superannuation</h5>
					<p>
						Superannuation Fund Name:{' '}
						{superannuationFundName}
					</p>
					<p>
						Membership Number:{' '}
						{membershipNumber}
					</p>
					<p>Fund ABN: {fundABN}</p>
					<hr />
					<h5>Tax Declaration</h5>
					<p>
						TFN declaration:{' '}
						{tfnDeclaration
							? 'Attached'
							: 'Not Attached'}{' '}
					</p>
					<p>
						Tax Withholding Form:{' '}
						{taxWithholdingForm
							? 'Attached'
							: 'Not Attached'}{' '}
					</p>
					<hr />
					<h5>Employment Information</h5>
					<p>
						Employment start date:{' '}
						{employmentStartDate}
					</p>
					<p>Job Title: {jobTitle}</p>
					<p>Salary: {salary}</p>
					<p>
						Annual Tax Income: {annualTaxIcome}
					</p>
					<p>
						Superannuation:{' '}
						{annualSuperannuation}
					</p>
					<p>Work Schedule: {workSchedule}</p>
					<p>Role: {role}</p>
					<hr />
					<h5>Employment Eligibility</h5>
					<p>
						Which of the following statements
						best describes your right to work in
						Australia?: {employmentEligibility}
					</p>
					<p>
						Proof of work eligibility:{' '}
						{employmentEligibilityProof
							? 'Attached'
							: 'Not Attached'}
					</p>
					<hr />
					<h5>Policies and Procedures</h5>
					<p>
						I have read and agreed with:{' '}
						{agreeWithPoliciesAndProcedures
							? 'True'
							: 'False'}
          </p>
          <hr />
					<h5>Workplace Health and Safety</h5>
					<p>
						Do you have any workplace health and
						safety concerns or requirements?:{' '}
						{workplaceConcerns}
					</p>
					<hr />
					<h5>Emergency Contact</h5>
					<p>Name: {emergencyContactName}</p>
					<p>
						Relationship:{' '}
						{emergencyContactRelationship}
					</p>
					<p>
						Phone Number:{' '}
						{emergencyContactPhoneNumber}
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={handleCloseModal}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
export default Onboarding
