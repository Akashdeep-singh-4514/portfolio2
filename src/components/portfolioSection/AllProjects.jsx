import React from "react";
import ProjectComponent from "./ProjectComponent";
import MegaBlogRecording from "../../assets/MegaBlogRecording.mp4";
import TwitchCloneRecording from "../../assets/TwitchCloneRecording.mp4";

function AllProjects() {
  return (
    <>
      <div className="row flex flex-wrap px-lg-5 mt-lg-5  ">
        <ProjectComponent
          title="twitch clone"
          genre="full-stack"
          Recording="http://res.cloudinary.com/dtx0nm3oa/video/upload/v1709898639/vqigqizhrtob8tor8css.mp4"
          githublink="https://github.com/Akashdeep-singh-4514/fullstack_twitch_clone"
        >
          This was my first front end project in which I learned about fetching
          data from API's and display it using AJAX. It was very fun for me to
          make a full stack project for the first time. In this project I've
          displayed twitch live streaming videos that one can watch online. I
          added backend created by me using spring framework where one can
          create account and login using credentials.{" "}
        </ProjectComponent>
        <ProjectComponent
          title="MegaBlog"
          genre="full-stack"
          Recording="https://res.cloudinary.com/dtx0nm3oa/video/upload/v1709898542/rvyfpphvezibz4hched2.mp4"
          githublink="https://github.com/Akashdeep-singh-4514/chaiblog-react"
        >
          In this project I used appwrite database service using this app you
          can post blogs with pictures attached and see others user's blog, you
          can see all posts together and also see them individually
        </ProjectComponent>
        <ProjectComponent
          title="Instagram Clone"
          genre="MERN Stack"
          Recording="https://res.cloudinary.com/dtx0nm3oa/video/upload/v1709898273/maerqfbxrligdvo9yc4v.mp4"
          githublink="https://github.com/Akashdeep-singh-4514/insta-clone"
        >
          Sign Up & Sign In: Seamless user onboarding process. Follow/Unfollow:
          Connect with other users effortlessly. Explore Users: Discover and
          connect with new accounts. Post Photos: Share your moments with the
          world. Search Users: Easily find friends and accounts. Like/Unlike
          Posts: Interact with content you love. Commenting: Engage with posts
          through comments. View All Comments: Dive deeper into post
          discussions. Upload Profile Picture: Personalize your profile. Remove
          Profile Picture: Customize your representation.
        </ProjectComponent>
      </div>
    </>
  );
}

export default AllProjects;
