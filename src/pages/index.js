import React from 'react';
import logo from '../images/bca-logo.svg';

import Layout from '../components/layout'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Layout>
        <SEO title="Blue Chip Athlete" keywords={[`Blue Chip Athlete`, `recruiting`, `soccer`, `How to play `]} />
        <div className="logo-container" style={{ display: `flex`, marginBottom: `2rem`, marginTop: `3rem` }}>
          <img style={{ height: `50px`, width: `50px`, marginRight: `1rem` }} src={logo} alt=""/>
          <h3 style={{ marginBottom: `2em`, paddingTop: `6px` }}>Blue Chip Athlete</h3>
        </div>
        <h1>Having trouble getting interest from college soccer coaches?</h1>
        <h4>
          Yea we've been there too, and it was really difficult.
          That's why we're on a mission to improve the process and help you or your child create an eye catching recruiting profile that coaches will be interested in.
        </h4>
        <p>Navigating the college recruitment process has never been easy, and we were sure someone would have created a solution to make the process more approachable.</p>
        <p>But <em>eight years</em> later, no one has.</p>
        <p>That sucks, because plenty of talented student athletes are missing out on opportunities not due to lack of skills, but the recruitment process being so obscure and difficult.</p>
        <h5 style={{ marginBottom: `4rem` }}>If you or your child are tired of being confused by things such as, NCAA clearinghouse and figuring out how to write an email that will catch coaches eyes, drop us your email and we’ll let you know when Blue Chip Athlete is ready.</h5>

        <div id="mc_embed_signup">
          <form action="https://bluechipathlete.us20.list-manage.com/subscribe/post?u=41efa80163936b386556739d7&amp;id=c3f3a27d9b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll" style={{ display: `flex` }}>

          <div className="mc-field-group">
            <input type="email" value={this.state.value} name="EMAIL" className="required email" id="mce-EMAIL" onChange={this.handleInputChange}/>
          </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: `none` }}></div>
              <div className="response" id="mce-success-response" style={{ display: `none` }}></div>
            </div>
            <div style={{ position: `absolute`, left: `-5000px` }} aria-hidden="true"><input type="text" name="b_41efa80163936b386556739d7_c3f3a27d9b" tabIndex="-1" value="" /></div>
              <input type="submit" value="STAY IN THE LOOP" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

export default IndexPage
