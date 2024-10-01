import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    id: {
        type: String,
        required: true,
      },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      default: 'uncategorized',
    },
    difficulty: {
        type: String,
        required: true,
        default: 'not available',
      },
      order: {
        type: Number,
        required: true,
        default: 'not available',
      },
      link: {
        type: String,
        default: 'not available',
      },
      videoId: {
        type: String,
        default: 'not available',
      },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Problem = mongoose.model('Problem', problemSchema);

export default Problem;