import Message from "../models/messageModel.js";

const postMessage = async (req, res) => {
  const { subject, message } = req.body;
  const user = req.user;

  try {
    const newMessage = await Message.create({
      subject,
      message,
      user: user._id,
    });

    res.status(201).json({
      status: "success",
      data: {
        book: newMessage,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while processing your request.",
    });
  }
};

export { postMessage };
