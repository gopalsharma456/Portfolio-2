import "./styles.css";

document.getElementById("app").innerHTML = `
<div class='container'>

<div class='items header'>
<div>
<h2>Web Developer</h2>
</div>
</div>

<div class='items about'>
<div>
<h3 id='about' ></h3>
<p>Hi, I'm <h2>Gopal Sharma</h2> </p>
<p>from <strong>Mumbai, India</strong>.</p>
</div>
<div>
<img class='image' src="https://pbs.twimg.com/profile_images/1590263451146158083/eiepr4j7_400x400.jpg" alt="picture">
</div>
</div>

<div class="items social">
<span>Important Links:</span>
<span><a href="https://twitter.com/gopalsharma456"><img alt="twitter" src="data:image/png;base64,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"></a>
<a href="https://github.com/gopalsharma456"><img alt="github" src="data:image/png;base64,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" ></a>
<a href="https://drive.google.com/file/d/1vRoxuoPnbVj8P_l20DXFEPZvd18-YEOU/view?usp=drive_link"><img alt="Resume" src="https://amritfoundationofindia.in/wp-content/uploads/2018/08/download-logo.png"></a>
</span>
</div>



<div class='items skill'>
<h3 id='skill'>Skills</h3>
<ul>
<li>JavaScript</li>
<li>React JS</li>
<li>Node JS & Express</li>
<li>Database (SQL & MongoDb)</li>
<li>HTML & CSS</li>
</ul>
</div>



<div class='items project'>
<h3 id='projects'>Projects</h3>

<ul>
<p><a href="https://neon-starlight-196ee0.netlify.app/" target="_blank"><strong>Whack A Mole Game(Live)<strong></a></p>
<p><a href="https://todolist-7390.onrender.com/" target="_blank"><strong>ToDo App(Live)</strong></a><p>
<p><a href="https://symphonious-platypus-1ed8ca.netlify.app/" target="_blank"><strong>Github Profile Wrapper(Live)</strong></a><p>

</ul>
</div>

<div class='items exp'>
<h3 id='exp'>Experience</h3>
<ul>
<li><strong>Digital Support Analyst</strong>, Eclerx Services Ltd., July 2019 to August 2022</li>
<li><strong>GIS Analyst</strong>, Accenture India Ltd., January 2019 to June 2019</li>
</ul>
</div>

<div class='items edu'>
<h3 id='edu'>Education</h3>
<ul>
<li><strong>Bachelor's </strong> in <strong>Computer Engineering</strong> from Mumbai University, 2017</li>
</ul>
</div>

<div class='items footer'>
<p>&#169;2023, Gopal Sharma</p>
</div>
</div>

`;
