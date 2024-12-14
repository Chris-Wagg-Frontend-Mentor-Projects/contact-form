export default function Home() {
	return (
		<main>
			<div className='form-container'>
				<h1>Contact us</h1>
				<form action='submit'>
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
						<fieldset>
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
					</div>
					<div className='form-input'>
						<label htmlFor='message'>Message *</label>
						<textarea name='message' id='message'></textarea>
					</div>
					<div className='form__checkbox'>
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
					<button>Submit</button>
				</form>
			</div>
		</main>
	)
}
