/// <reference path="../.astro/types.d.ts" />

type Job = {
    date: string;
    title: string;
    description: string;
    company?: string;
};

type Skill = {
    name: string;
    iconUrl: string;
};

type Project = {
    title: string;
    description: string;
    usedSkills: Skill[];
    images?: string[];
    link: string;
    audioUrl?: string;
};
