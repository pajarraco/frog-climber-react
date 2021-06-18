import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FollowPage() {
  return (
    <div className='container'>
      <h1>Follow Us</h1>
      <div className='row'>
        <div className='col'>
          <a className='btn-social' href='https://www.youtube.com/channel/UCAbswsLikC3QeLSHmOLdBNA' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={ [ 'fab', 'youtube' ] } size='2x' title="youtube"/>YouTube
          </a>
        </div>
        <div className='col'>
          <a className='btn-social' href='https://www.instagram.com/frogclimber/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={ [ 'fab', 'instagram' ] } size='2x' />Instagram
          </a>
        </div>
        <div className='col'>
          <a className='btn-social' href='https://www.facebook.com/frogclimber' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={ [ 'fab', 'facebook' ] } size='2x' />Facebook
          </a>
        </div>
        <div className='col'>
          <a className='btn-social' href='https://www.linkedin.com/company/frogclimber/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={ [ 'fab', 'linkedin' ] } size='2x' />LinkedIn
          </a>
        </div>
        <div className='col'>
          <a className='btn-social' href='https://twitter.com/frog_climber' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={ [ 'fab', 'twitter' ] } size='2x' />Twitter
          </a>
        </div>

      </div>
    </div>
  );
};

export default FollowPage;