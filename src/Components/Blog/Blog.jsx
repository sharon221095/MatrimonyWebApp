import React, { useState } from 'react';
import './Blog.css'
import { useNavigate, NavLink } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import image16 from '../img/img-16.avif';
import image17 from '../img/img-17.jpg';
import image18 from '../img/img-18.avif';
import image19 from '../img/img-19.avif';
import image20 from '../img/img-20.jpg';
import articleImage from '../img/img-20.jpg'; // Import your article image here

const Blog = () => {
    const navigateTo = useNavigate();
    const [showModal, setShowModal] = useState(false);
  
    const handleArticleClick = () => {
      setShowModal(true);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
    };

  return (
    <div className='body'>
        <header class="header8">
        <h2 class="h2g"><a href="" onClick={() => navigateTo('/home')}>TheIndianWedding</a></h2>
        <nav>
            <ul>
                <li><a href="" onClick={() => navigateTo('/home')}>Home</a></li>
                <li><a href="" onClick={() => navigateTo('/about')}>About Us</a></li>
                <li><a href="" onClick={() => navigateTo('/services')}>Services</a></li>
                <li><a href=""onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
                <li><a href="" onClick={() => navigateTo('/testimonials')}>Testimonials</a></li>
                <li><a href="" onClick={() => navigateTo('/blog')}>Blog</a></li>
                <li><a href="" onClick={() => navigateTo('/contact')}>Contact</a></li>
            </ul>
        </nav>
        <div class="button16">
            <a href="" onClick={() => navigateTo('/contact')}><span>Join Us</span></a>
        </div>
    </header>

    <div class="parent-container64">

        <div class="container64">

                <h1>Discover Inspiring Stories and Advice</h1>
                <p>Explore a collection of articles covering relationships, marriage tips, and success stories in the world of the 'TheIndianwedding'.</p>

        </div>

    </div>

     {/* Article Preview Section */}
      <div className='article-preview-container'>
        <div className='article-preview' onClick={handleArticleClick}>
          <img src={articleImage} alt='Article Preview' className='article-image' />
          <h3>11 Old-Fashioned Relationship Habits We Should Start Bringing Back</h3>
          <p>Learn to love the way it's taught in the book "Men are from Mars and Women are from Venus" by John Gray. This is to protect the marriage and prevent major issues...</p>
        </div>
      </div>


       {/* Styled Modal for Article Details */}
       <Modal show={showModal} onHide={handleModalClose} centered dialogClassName='custom-modal'>
        <Modal.Header closeButton className='modal-header-custom'>
          <Modal.Title className='modal-title-custom'>11 Old-Fashioned Relationship Habits</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body-custom'>
          <img src={articleImage} alt='Article' className='modal-image' />
          <div className='article-content'>
            {/* Full Article Content */}
            <p>Learn to love the way it's taught in the book " Men are from Mars and women from Venus" by John Gray. This is to protect the marriage and also to prevent major issues. Remember, prevention is better than cure.<br/>
            Little acts of kindness done daily is the 'love portion' for thriving relationships and keeping the spark alive for decades.
            </p>
            <h4>1. Time Together: Quality over Quantity</h4>
            <p>
            <b>So no phones, technology or to do lists while spending quality time together!</b><br/>
            In today's fast-paced world, it's easy to get caught up in the hustle and bustle of daily life. However, quality time with your partner is essential for a healthy relationship. Set aside device-free, distraction-free time together, focusing on shared experiences and connections. This can be as simple as going for a walk, cooking dinner together, or engaging in a hobby. By prioritizing quality time, you strengthen your bond, foster deeper conversations, and create lasting memories. Regularly schedule this time into your daily or weekly routine, ensuring that your relationship remains a priority.

            </p>

            <h4>2. Be Curious: Ask Questions and Show Interest</h4>
            <p>
            <b>Ask questions to know more and be genuinely interested in the moment of the conversation.</b><br/>
            Maintaining curiosity and interest in your partner's life is vital for a fulfilling relationship. Ask open-ended questions that encourage meaningful conversations, and actively listen to their responses. Show genuine interest in their thoughts, feelings, and experiences. This helps prevent complacency and keeps the spark of discovery alive. Explore new experiences together, whether trying a new restaurant, taking a weekend trip, or learning a new skill. By staying curious, you continue to learn and grow together.

            </p>

            <h4>3. Express Gratitude Daily</h4>
            <p>
              <b>Be grateful for having this person in your life. If not for this person, life could be a lot worse off! </b><br/>
              Gratitude is a powerful tool for nurturing a positive relationship. Take time each day to express appreciation for your partner, acknowledging the positive impact they have on your life. Share specific reasons you're thankful for them, whether it's their sense of humor, support, or kindness. This cultivates a culture of gratitude and affection, helping to create a warm and loving environment. Verbalize your gratitude through words, actions, or small gestures, ensuring your partner feels valued and cherished.

            </p>

            <h4>4. Work as a Team: Collaborate and Grow</h4>
            <p>
             <b>Working together and help each other grow in every possible aspect is essential to keep the boredom away and keeping the Dopamine dripping in your love relationship.</b><br/>
             A healthy relationship is built on teamwork and collaboration. Work together to support each other's goals, aspirations, and personal growth. Celebrate successes and learn from setbacks together, fostering a sense of unity and progress. Recognize that your partner's achievements are your achievements, and vice versa. By collaborating, you create a strong foundation for navigating life's challenges and overcoming obstacles.
            </p>

            <h4>5. Inner Beauty Followed by Outer Presentation</h4>
            <p>
            <b>Work on optimizing inner beauty and pay due attention to external appearance too.</b><br/>
            Perhaps, you fell in love based on appearance at first and the love grew wings with the personality traits later.
            While physical attraction is important, inner beauty is the foundation of a lasting relationship. Nurture your inner qualities, such as empathy, kindness, and humor, while also taking care of your physical appearance. Recognize that attraction is multifaceted, and both aspects contribute to a fulfilling relationship. Invest time in self-care, personal growth, and self-improvement, ensuring you're the best version of yourself for your partner.
            </p>

            <h4>6. Honest Communication: Tell the Truth</h4>
            <p>
            <b>Tell the truth but be sensible to the timing and location. Lies are unnecessary. If truth cannot be told, a smile or silence would be safer than a lie. Remember, lies follow a chain of more lies, all unnecessary hassle!</b><br/>
            Honesty is essential for building trust and maintaining a healthy relationship. Practice transparency, sharing thoughts and feelings in a considerate and timely manner. Avoid lies, which can lead to unnecessary complications and erode trust. Be mindful of the timing and location of sensitive conversations, ensuring your partner feels comfortable and receptive. Remember, honesty builds trust, while dishonesty can damage your relationship irreparably.
            </p>

            <h4>7. Just Say Sorry: Conflict Resolution</h4>
            <p>
            <b>Don't you worry, it will not reduce your bank balance, if anything,  it might increase it!</b><br/>
            It's better to lose the argument and win the person than win the argument and lose your love relationship.
            No relationship is immune to conflicts, but it's how you resolve them that matters. Prioritize relationship harmony over winning arguments. Apologize when necessary, demonstrating empathy and a willingness to grow together. Recognize that apologizing doesn't diminish your self-worth; rather, it shows strength and a commitment to your partner's feelings. By resolving conflicts in a constructive manner, you strengthen your bond and foster a culture of understanding.
            </p>

            <h4>8. Open Communication of Issues</h4>
            <p>
              <b>Speak out your relationship issues openly in private, and of course, first express how much you love this person and desire the preferred changes to spice up your love relationship. It's not easy, time consuming,  sometimes,  several years. But, it works!</b><br/>
              Addressing relationship concerns in a constructive manner is crucial for maintaining a healthy partnership. Discuss issues privately, starting with affirmations of love and appreciation. Engage in open and honest conversations, actively listening to each other's perspectives. Approach these discussions with empathy and understanding, seeking solutions rather than placing blame. By addressing issues openly, you prevent resentment and foster a stronger connection.
            </p>

            <h4>9. Optimism and Daily Encouragement</h4>
            <p>
            <b>Life may look awful sometimes and awesome occasionally. It should be like, "we may have our ups and downs, but I will always love you!" This is the foundation for thriving marriages. Serve a word of encouragement with meals daily, if needed several times a day too!</b><br/>
            Maintaining a positive outlook is essential for navigating life's challenges together. Offer daily encouragement and support, celebrating your partner's successes and helping them through difficulties. Recognize that life's ups and downs are inevitable, but with a positive attitude, you can overcome any obstacle. Foster a culture of optimism, gratitude, and appreciation, ensuring your relationship remains resilient and fulfilling.
            </p>

            <h4>10. Promise: Underpromise and Overdeliver</h4>
            <p>
            <b>Always promise a little lesser and overdo it, making it a pleasant surprise for your spouse. We all like it! But if it's other way around,  it's not gonna be pretty!!</b><br/>
            Setting realistic expectations is vital for maintaining trust and satisfaction in your relationship. Promise a little less and deliver a little more, making it a pleasant surprise for your partner. This builds trust, fosters appreciation, and creates delightful surprises. Avoid overpromising and underdelivering, which can lead to disappointment and frustration. By exceeding expectations, you demonstrate your commitment and care for your partner's happiness.
            </p>

            <h4>11. Loyalty: Unwavering Commitment</h4>
            <p>
            <b>This is truly basic, if this cannot be done, perhaps marriage is not the right option. There are other options but none of them would make you happy long-term. Difficult to swallow yet true!</b><br/>
            Loyalty is the foundation of a healthy, long-term relationship. Demonstrate unwavering commitment and fidelity, recognizing that loyalty is essential for building trust and security. Prioritize your relationship, ensuring you.
            </p>
            <p className="closing-text">
            <strong>All the best everyone!</strong>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className='modal-footer-custom'>
          <Button variant='primary' onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    

    <div class="parent-container65">
        <div class="check">
            <h2>Check Out Our Recent Work On Instagram</h2>
            <div class="insta">
                <a href="" target="_self" rel="noopener noreferrer">Follow Us On Instagram</a>
            </div>
        </div>
        <div class="container65">
            <div class="img16">
                <figure>
                    <img src={image16} alt="img-16"></img>
                </figure>
            </div>
            <div class="img17">
                <figure>
                    <img src={image17} alt="img-17"></img>
                </figure>
            </div>
            <div class="img18">
                <figure>
                    <img src={image18} alt="img-18"></img>
                </figure>
            </div>
            <div class="img19">
                <figure>
                    <img src={image19} alt="img-19"></img>
                </figure>
            </div>
            <div class="img20">
                <figure>
                    <img src={image20} alt="img-20"></img>
                </figure>
            </div>
        </div>
    </div>

    
    <div class="parent-container66">
        <div class="container66">
        
                <div class="find">
                    <h2>Find Your Soulmate Today</h2>
                </div>
                <p class="info50">Join The IndianWedding today and begin your search for a compatible life partner in the Indian community.</p>
                <div class="button17">
                    <a href="" target="_self" rel="noopener noreferrer" role="button" onClick={() => navigateTo('/contact')}>
                        <span>Join Now</span>
                    </a>
                </div>
        
        </div>
    </div>


    <div class="parent-container67">
    <div class="contact-container7">
        <div class="contact-item7">
            <h2>Phone</h2>
            <p>202-555-0188</p>
        </div>
        <div class="contact-item7">
            <h2>Follow Us</h2>
            <div class="social-icons7">
                <ul>
                    <li><a href="" target="blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="" target="blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube" target="blank"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contact-item7">
            <h2>Email</h2>
            <p>contact@example.com</p>
        </div>
    </div>
    </div>
    
    
    
        
    <div class="parent-container68">

        <nav class="container68">

            <ul id="info51">
                <li><a href="" onClick={() => navigateTo('/home')}>Home</a></li>
                <li><a href="" onClick={() => navigateTo('/about')}>About Us</a></li>
                <li><a href="" onClick={() => navigateTo('/services')}>Services</a></li>
                <li><a href=""onClick={() => navigateTo('/portfolio')}>Portfolio</a></li>
                <li><a href="" onClick={() => navigateTo('/testimonials')}>Testimonials</a></li>
                <li><a href="" onClick={() => navigateTo('/blog')}>Blog</a></li>
                <li><a href="" onClick={() => navigateTo('/contact')}>Contact</a></li>
            </ul>

        </nav>

    </div>			
                      
                                

    <div class="parent-container69">
	    <div class="container69">
            <p>Copyright © 2024 theindianwedding</p>
        </div>			
    </div>
    </div>
  )
}

export default Blog