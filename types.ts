export type CourseCodes =
  | "CSC102"
  | "CSC103"
  | "GES101"
  | "GES108"
  | "MAT111"
  | "MAT121"
  | "PHY104"
  | "STA115"
  | "STA121"
  | "GES107"
  | "MAT141"
  | "PHY102"
  | "PHY105";

export interface Result {
  course: CourseCodes;
  score: number;
}
