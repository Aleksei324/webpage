import './AboutMe.css';
import imagecode from '../../images/code.jpg';

function AboutMe(){
	return (
		<section className="flex AboutMe">
			<div className='centerSideMain mar'>

				<img className='imgCool imgMain' src={imagecode} alt='A computer with code and a cup' width='300' height='200'/>
				<h2>About me</h2>

				<p>
					Welcome to my webpage, I'm just a guy who likes to develop software and webapps, play games 
					and listen to music; I like to tinker with <i>Linux</i> and open source in general. I can speak 
					Spanish and English. <br/><br/> My favourite language at the moment is <i>Python</i>. Feel free to contact 
					me if you want to talk, collaborate or correct me on something.
				</p>

				<br/>

				<h3>I have knowledge in software development with technologies such as:</h3>

				<i>
					<ul>
						<li className='oneLine'>React</li>
						<li className='oneLine'>Python</li>
						<li className='oneLine'>Java</li>
						<li className='oneLine'>SQL</li>
					</ul>
				</i>

			</div>

			<div>
				<div className='rSideMain mar'>
					<h2>Contact</h2>

					<ul>
						<li>
							Github:&nbsp;
							<a target='_blank' rel="noreferrer" 
								href='https://github.com/Aleksei324' 
								title='Link to my personal Github.'>Aleksei324</a>
						</li>

						<li>
							LinkedIn:&nbsp;
							<a target='_blank' rel="noreferrer" 
								href='https://www.linkedin.com/in/aleksei324' 
								title='Link to my personal LinkedIn.'>Aleksei324</a>
						</li>
					</ul>

				</div>

				<div>
					{/* This div helps the side panel to keep his normal size even when the text is stretched */}
				</div>

			</div>

		</section>
	);
}

export default AboutMe;
