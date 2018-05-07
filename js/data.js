const facebook = 'https://www.facebook.com/RksSansthan/';
const twitter = '#';
const googlePlus = '#';
const youtube = '#';
const instagram = '#'
const socailMediaUrl = {facebook, twitter, googlePlus, youtube, instagram}

//insert socailMediaUrl to footer
//facebook
$('.data-social-facebook').attr({'href': socailMediaUrl.facebook, 'target': '_blank'});
