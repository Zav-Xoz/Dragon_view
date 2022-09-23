<h1 align="center">Hi there, I'm <a href="https://madappgang.netlify.app/" target="_blank">Dragon app</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">Dragon project for the Company MadAppGang</h3>
 <p align="center">
    <img src="https://i.ibb.co/wsGR0L0/pngwing-com.png" alt="pngwing-com" border="0" height="250"/>
 </p>

---

## About

An application about the SpaceX space program is presented to your attention.<br>
The application is for informational purposes,<br>
intended for educational purposes.

## Documentation

- project in the cloud Netlify <br> url: <a href="https://madappgang.netlify.app/">madappgang.netlify.app</a>
- also deployment <br> url: <a href="https://zav-xoz.github.io/Dragon_view/">GitHub Pages</a>

#### The project is published with a secure connection protocol, HTTPS (HyperText Transfer Protocol Secure).

#### Implemented continuous deployment works by connecting the Git repository to the Netlify site and synchronizing them. This is done using OAuth2 authentication of the Git provider or the Netlify GitHub app.

---

#### Site deploys overview

The site deployment process is configured to automatically display the latest version.
No changes go live on your site’s public URL before all changes have been uploaded. Once all the changes are ready, the new version of the site immediately goes live on the CDN.
This means deploys are atomic, and your site is never in an inconsistent state while you’re uploading a new deploy.
Netlify will compare the new deployment with your existing deployment and determine which files have changed and need to be downloaded.

#### Branches and deploys

The project settings allow you to control which branches in your Git repository you want to deploy (designate as the Production branch). The development was carried out by one developer, therefore: <br>
_Manufacturing industry > main_ <br>
_Branch Deployment > the working branch (master), can set up another branch to work on the team._

---

## CI/CD

 <img src="https://i.ibb.co/kmvfj73/29ff1cc39f1ccbfb7e93ad2e31c509e9.png" alt="29ff1cc39f1ccbfb7e93ad2e31c509e9" border="0"/> 
     
CI - Continuous Integration <br>
CD - Continuous Delivery

### Full development cycle ( including CI/CD ) <br>

#### Steps:

- **Code** <br>
  _writing code according to the task, in this case, the Terms of Reference. commit, push to Git._
- **Buld** <br>
  _testing with Jenkins system (it makes sense if the build is tested for no more than 10 minutes automatically)_
- **Test** <br>
  _after successful completion of auto tests, manual testing_
- **Release** <br>
  _after verification by the test team, a stable version of the product is released
  (version is called release candidate)_
- **Deploy** <br>
  _the release branch is downloaded and deployed to the client's production server._
- **Operate** <br>
  _monitoring the deployed version of the product._
- **Monitor** <br>
  _correction if there were errors if the work is not according to the script._
- **Plan** <br>
  _planning for new features and collecting data for adjustments for new releases in the future._

## Releases

- v 0.1.0

## Languages

<img src="https://i.ibb.co/kKcw3kw/pngwing-com-2.png" alt="pngwing-com-2" border="0" height="100"/> 
 
## License
open license ( free license )
