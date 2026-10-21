// State Management & LocalStorage Persistence
const RANKS = [
  { minXP: 0, title: "Asistente de Proyecto", level: 1 },
  { minXP: 150, title: "Coordinador de Proyecto", level: 2 },
  { minXP: 450, title: "Project Manager Junior", level: 3 },
  { minXP: 900, title: "Senior Project Manager", level: 4 },
  { minXP: 1600, title: "Agile Project Leader", level: 5 },
  { minXP: 2500, title: "Director de Proyectos PMP", level: 6 },
  { minXP: 4000, title: "Leyenda PMBOK 8 Master", level: 7 }
];

class StateManager {
  constructor() {
    this.storageKey = "pmbok8_app_state_v1";
    this.listeners = [];
    this.state = this.loadState();
    this.checkStreak();
  }

  getDefaultState() {
    return {
      hearts: 5,
      maxHearts: 5,
      lastHeartLossTime: null,
      xp: 0,
      streak: 1,
      lastActiveDate: new Date().toISOString().split("T")[0],
      completedLessons: ["les-1-1"], // First lesson unlocked by default
      passedQuizzes: [],
      theme: "light",
      soundEnabled: true,
      dailyQuests: {
        date: new Date().toISOString().split("T")[0],
        xpEarnedToday: 0,
        lessonsDoneToday: 0,
        streakKept: false
      }
    };
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...this.getDefaultState(), ...parsed };
      }
    } catch (e) {
      console.warn("Could not load local state:", e);
    }
    return this.getDefaultState();
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.warn("Could not save state:", e);
    }
    this.notify();
  }

  checkStreak() {
    const today = new Date().toISOString().split("T")[0];
    const last = this.state.lastActiveDate;
    if (last !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if (last === yesterday) {
        // Streak continues
      } else {
        // Streak lost
        this.state.streak = 1;
      }
      this.state.lastActiveDate = today;
      this.save();
    }
  }

  getRank() {
    const xp = this.state.xp;
    let currentRank = RANKS[0];
    let nextRank = RANKS[1];

    for (let i = 0; i < RANKS.length; i++) {
      if (xp >= RANKS[i].minXP) {
        currentRank = RANKS[i];
        nextRank = RANKS[i + 1] || null;
      }
    }

    const currentBase = currentRank.minXP;
    const nextTarget = nextRank ? nextRank.minXP : currentRank.minXP + 1000;
    const progress = Math.min(100, Math.max(0, ((xp - currentBase) / (nextTarget - currentBase)) * 100));

    return {
      title: currentRank.title,
      level: currentRank.level,
      currentXP: xp,
      nextXP: nextTarget,
      progressPercent: progress
    };
  }

  addXP(amount) {
    this.state.xp += amount;
    this.state.dailyQuests.xpEarnedToday += amount;
    this.save();
  }

  decrementHeart() {
    if (this.state.hearts > 0) {
      this.state.hearts -= 1;
      this.state.lastHeartLossTime = Date.now();
      this.save();
    }
    return this.state.hearts;
  }

  refillHearts() {
    this.state.hearts = this.state.maxHearts;
    this.save();
  }

  completeLesson(lessonId, xpReward = 30) {
    if (!this.state.completedLessons.includes(lessonId)) {
      this.state.completedLessons.push(lessonId);
    }
    this.addXP(xpReward);
    this.state.dailyQuests.lessonsDoneToday += 1;
    this.save();
  }

  isLessonCompleted(lessonId) {
    return this.state.completedLessons.includes(lessonId);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this.state);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }
}

export const stateManager = new StateManager();
