import React from "react";

const commentsData = [
  {
    name: "Shikhar Bansal",
    text: "This is a comment ",
    replies: [
      {
        name: "Shikhar Bansal",
        text: "This is a comment ",
        replies: [],
      },
      {
        name: "Shikhar Bansal",
        text: "This is a comment ",
        replies: [],
      },
    ],
  },
  {
    name: "Shikhar Bansal",
    text: "This is a comment ",
    replies: [],
  },
  {
    name: "Shikhar Bansal",
    text: "This is a comment ",
    replies: [
      {
        name: "Shikhar Bansal",
        text: "This is a comment ",
        replies: [],
      },
      {
        name: "Shikhar Bansal",
        text: "This is a comment ",
        replies: [
          {
            name: "Shikhar Bansal",
            text: "This is a comment ",
            replies: [],
          },
          {
            name: "Shikhar Bansal",
            text: "This is a comment ",
            replies: [
              {
                name: "Shikhar Bansal",
                text: "This is a comment ",
                replies: [],
              },
              {
                name: "Shikhar Bansal",
                text: "This is a comment ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shikhar Bansal",
    text: "This is a comment ",
    replies: [
      {
        name: "Shikhar Bansal",
        text: "This is a comment ",
        replies: [],
      },
      {
        name: "Shikhar Bansal",
        text: "This is a comment ",
        replies: [
          {
            name: "Shikhar Bansal",
            text: "This is a comment ",
            replies: [],
          },
          {
            name: "Shikhar Bansal",
            text: "This is a comment ",
            replies: [
              {
                name: "Shikhar Bansal",
                text: "This is a comment ",
                replies: [],
              },
              {
                name: "Shikhar Bansal",
                text: "This is a comment ",
                replies: [
                  {
                    name: "Shikhar Bansal",
                    text: "This is a comment ",
                    replies: [],
                  },
                  {
                    name: "Shikhar Bansal",
                    text: "This is a comment ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((commment, index) => (
    <div>
      <Comment key={index} data={commment} />
      <div className="pl-5 border border-l-black ml-5">
        {/* <Comment key={index} data={commment} />
        <Comment key={index} data={commment} />
        <Comment key={index} data={commment} /> */}
        <CommentsList comments={commment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 m-2 shadow-sm bg-gray-100 rounded-sm">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
      />
      <div>
        <p className="font-bold p-1">{name}</p>
        <p className="p-1">{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2 ">
      <h2 className="text-xl font-bold">Comments: </h2>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
