import { CourseCodes } from "./types";

export const coursesPoint: {
  [Course in CourseCodes]: {
    course: Course;
    unit: number;
  };
} = {
  CSC102: {
    course: "CSC102",
    unit: 4,
  },
  CSC103: {
    course: "CSC103",
    unit: 4,
  },
  GES101: {
    course: "GES101",
    unit: 2,
  },
  GES108: {
    course: "GES108",
    unit: 2,
  },
  MAT111: {
    course: "MAT111",
    unit: 4,
  },
  MAT121: {
    course: "MAT121",
    unit: 4,
  },
  PHY104: {
    course: "PHY104",
    unit: 3,
  },
  STA115: {
    course: "STA115",
    unit: 3,
  },
  STA121: {
    course: "STA121",
    unit: 3,
  },
  GES107: {
    course: "GES107",
    unit: 2,
  },
  MAT141: {
    course: "MAT141",
    unit: 4,
  },
  PHY102: {
    course: "PHY102",
    unit: 3,
  },
  PHY105: {
    course: "PHY105",
    unit: 3,
  },
};
