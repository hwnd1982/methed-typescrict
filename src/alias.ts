type skill = [number, string, number];

const html: skill = [1, 'html', 10];
const css: skill = [2, 'css', 20];
const js: skill = [3, 'js', 30];

const allSkills: skill[] = [
  [1, 'html', 10],
  [2, 'css', 20],
  [3, 'js', 30]
];


type module = {
  index: number;
  title: string;
  hours: number;
}

type finalProject = {
  discriptionFinalProject: string;
  hoursFinalProject: number;
}

// полностью
type ModuleWithFinalProjectIntersection = module & finalProject;
// хотябы одна из структур
type ModuleWithFinalProjectUnion = module | finalProject;

const m1: ModuleWithFinalProjectIntersection = {
  index: 1,
  title: 'Основы HTML',
  hours: 5,
  discriptionFinalProject: 'Структурная верстка',
  hoursFinalProject: 2,
}

const m2: ModuleWithFinalProjectUnion = {
  index: 2,
  title: 'Основы CSS',
  hours: 10,
  discriptionFinalProject: 'CRM',
}

const m3: module = {
  index: 3,
  title: 'Основы JS',
  hours: 15,
};

const course1: readonly module[] = [
  {
    index: 1,
    title: 'Основы HTML',
    hours: 5,
  },
  {
    index: 2,
    title: 'Основы CSS',
    hours: 10,
  }
]

const course2: ReadonlyArray<module> = [
  {
    index: 1,
    title: 'Основы HTML',
    hours: 5,
  },
  {
    index: 2,
    title: 'Основы CSS',
    hours: 10,
  },
  {
    index: 3,
    title: 'Основы JS',
    hours: 15,
  }
]