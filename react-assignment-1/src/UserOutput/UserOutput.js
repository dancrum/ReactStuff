import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className='UserOutput'>
            <h2>{props.username}</h2>
            <p>Lorem ipsum dolor amet chicharrones jianbing beard, artisan lyft poutine vaporware kickstarter cronut mustache edison bulb mumblecore locavore pickled. Unicorn taxidermy kogi, cray actually synth pork belly. Taiyaki tousled man braid, succulents live-edge gochujang keytar plaid readymade scenester kickstarter roof party man bun bushwick. Venmo synth forage, DIY humblebrag marfa brooklyn direct trade post-ironic you probably haven't heard of them banh mi gochujang disrupt. Yr godard tumeric, kale chips iPhone kinfolk vape jean shorts photo booth. Irony hoodie live-edge retro taiyaki skateboard. Vape snackwave disrupt chambray, humblebrag readymade cardigan four loko artisan coloring book seitan edison bulb organic vice.</p>
            <p>Flannel mustache swag, shabby chic literally kitsch whatever four dollar toast cred shoreditch 90's meh irony. Tumblr copper mug semiotics, fam DIY dreamcatcher af shaman. Umami offal chartreuse ugh hot chicken shabby chic. Synth photo booth keytar man braid mixtape fanny pack. Tilde before they sold out chartreuse activated charcoal art party celiac microdosing crucifix brunch. Pickled subway tile etsy heirloom keffiyeh, church-key freegan venmo put a bird on it photo booth gochujang post-ironic humblebrag.</p>
        </div>
    )
}

export default UserOutput;