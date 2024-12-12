import { AnimatedProfiles } from "@/components/ui/animated-profiles";

export function Profile() {
  const profiles = [
    {
      crew: "Research Crew",
      name: "Nur Aziz Tri Indrawan",
      id: "21/474039/PA/20458",
      src: "https://drive.usercontent.google.com/download?id=19_EvR9mbSE__1v90IDjGNXC9mY2dQ-zc",
    },
    {
      crew: "Film Crew",
      name: "Dewangga Haryono Putra",
      id: "22/492661/PA/21132",
      src: "https://drive.usercontent.google.com/download?id=1YqoeD9Kh8X99Ye7S5gzP7gskZdcKYegG",
    },
    {
      crew: "Film Crew",
      name: "Arya Laksamana Jalma",
      id: "22/492703/PA/21136",
      src: "https://drive.usercontent.google.com/download?id=1_9bhgc4fg2aP9NCOuyzHtu4jY7ikfcjV",
    },
    {
      crew: "Research Crew",
      name: "Tengku Syaid Farhan",
      id: "22/493998/PA/21234",
      src: "https://drive.usercontent.google.com/download?id=1y1tOLnOQsSi2-bn3SQMYop4N_EiUwiS3",
    },
    {
      crew: "Film Crew",
      name: "Dinda Hana Zhafira",
      id: "22/494038/PA/21240",
      src: "https://drive.usercontent.google.com/download?id=1Kk5CYcLWbgZ64S1Wp98r-398HX9bx8I9",
    },
    {
      crew: "Research Crew",
      name: "Intan Dwi Febryanti",
      id: "22/494760/PA/21285",
      src: "https://drive.usercontent.google.com/download?id=1BYKcBlqzU1gW-QOaFJOt4B8t3yxtJIN6",
    },
    {
      crew: "Website Crew",
      name: "Rakyan Pangrukti Wibana",
      id: "22/497076/PA/21394",
      src: "https://drive.usercontent.google.com/download?id=1AO3-ABO3tkorhZQn1Y_mGNyTO_CGDcah",
    },
    {
      crew: "Website Crew",
      name: "Nathanael Aurelino Sulistyo",
      id: "22/497480/PA/21422",
      src: "https://drive.usercontent.google.com/download?id=1hIciitR06Of9n1a-syxwpVjEZA9fc6VY",
    },
    {
      crew: "Film Crew",
      name: "Zulfia Dwi Al Syalwa",
      id: "22/497584/PA/21428",
      src: "https://drive.usercontent.google.com/download?id=1kdg67DyD0xwpmrXvd02cr__jVLar5q1f",
    },
    {
      crew: "Website Crew",
      name: "Rhafael Chandra",
      id: "22/498550/PA/21528",
      src: "https://drive.usercontent.google.com/download?id=1eIpcHj7MgW04RiYSgUkRG2r2DRUN4T7Z",
    },
    {
      crew: "Research Crew",
      name: "Isneyri Arsyadani",
      id: "24/550113/NPA/19966",
      src: "https://drive.usercontent.google.com/download?id=1fIGLe9fWEgoOAOVw7AVC4prSgWyahh52",
    },
  ];
  return <AnimatedProfiles profiles={profiles} />;
}
