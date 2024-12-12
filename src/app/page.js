export default function Home() {
	return (
		<main>
			<body>
				<h1>Contact us</h1>
				<form className='form-container' action='submit'>
					<div>
						<div className='form-input'>
							<label htmlFor='name'>First name *</label>
							<input type='text' name='name' id='name' />
						</div>
						<div className='form-input'>
							<label htmlFor='name'>Last name *</label>
							<input type='text' name='name' id='name' />
						</div>
					</div>
					<div className='form-input'>
						<label htmlFor='email'>Email *</label>
						<input type='email' name='email' id='email' />
					</div>
					<div>
						<fieldset className='form-input'>
							<legend>Query type *</legend>
							<div>
								<input
									required
									type='radio'
									name='radio-select'
									value='general'
								/>
								<label htmlFor='general-enquiry'>
									General enquiry
								</label>
							</div>
							<div>
								<input
									required
									type='radio'
									name='radio-select'
									value='support'
								/>
								<label htmlFor='support-request'>
									Support request
								</label>
							</div>
						</fieldset>
						<div className='form-input'>
							<label htmlFor='message'>Message *</label>
							<textarea name='message' id='message'></textarea>
						</div>
						<div className='form-input'>
							<input
								type='checkbox'
								required
								name='terms'
								value='agree'
							/>
							<label htmlFor='terms'>
								I consent to being contacted by the team *
							</label>
						</div>
					</div>
					<button>Submit</button>
				</form>
			</body>
		</main>
	)
}
