import react from "react";
import "./card.css";

type Course = {
  title: string;
  description: string;
  bannerImage: string;
  avatarImage: string;
  author: string;
};

const courses: Course[] = [
  {
    bannerImage:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
    title: "Figma UI UX Design Essentials",
    description:
      "Use Figma to get a job in UI Design, User Interface, User Experience design, UX Design & Web Design",
    avatarImage:
      "https://images.unsplash.com/photo-1542309667-2a115d1f54c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    author: "Afdolash",
  },
  {
    bannerImage:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatarImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
  {
    bannerImage:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatarImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
  {
    bannerImage:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatarImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
  {
    bannerImage:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatarImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
  {
    bannerImage:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatarImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
  {
    bannerImage:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    description:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    avatarImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    author: "John Doe",
  },
];

const Card = ({
  bannerImage,
  title,
  description,
  avatarImage,
  author,
}: Course) => {
  return (
    <div className="card">
      <img src={bannerImage} alt={title} />
      <div className="card_body">
        <div className="about">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="author">
          <img src={avatarImage} alt={author} />
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export const CardList = () => {
  return (
    <div className="container">
      {courses.map((item, index) => (
        <Card
          key={index}
          bannerImage={item.bannerImage}
          title={item.title}
          description={item.description}
          avatarImage={item.avatarImage}
          author={item.author}
        />
      ))}
    </div>
  );
};
