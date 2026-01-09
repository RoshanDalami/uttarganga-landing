export const apiUrl = {
  health: {
    check: {
      method: "GET",
      url: "/health",
    },
  },
  logo: {
    get: {
      method: "GET",
      url: "/logo",
    },
    first: {
      method: "GET",
      url: "/logo/first",
    },
  },
  banner: {
    create: {
      method: "POST",
      url: "/banner",
    },
    get: {
      method: "GET",
      url: "/banner",
    },
    patch: {
      method: "PATCH",
      url: "/banner",
    },
    getById: {
      method: "GET",
      url: "/banner",
    },
    deleteById: {
      method: "DELETE",
      url: "/banner",
    },
  },
  notice: {
    create: {
      method: "POST",
      url: "/notice",
    },
    get: {
      method: "GET",
      url: "/notice",
    },
    patch: {
      method: "PATCH",
      url: "/notice",
    },
    getById: {
      method: "GET",
      url: "/notice",
    },
    deleteById: {
      method: "DELETE",
      url: "/notice",
    },
    deleteMedia: {
      method: "DELETE",
      url: "/notice/media",
    },
    getFront: {
      method: "GET",
      url: "/notice/front",
    },
  },
  activities: {
    get: {
      method: "GET",
      url: "/activities",
    },
    getActivitiesById: {
      method: "GET",
      url: "/activities",
    },
  },
  about: {
    get: {
      method: "GET",
      url: "/about",
    },
  },
  teamMember: {
    get: {
      method: "GET",
      url: "/team-member",
    },
  },
  teamCategory: {
    get: {
      method: "GET",
      url: "/team-category",
    },
  },
  project: {
    get: {
      method: "GET",
      url: "/project",
    },
    getById: {
      method: "GET",
      url: "/project",
    },
  },
  gallery: {
    userview: {
      method: "GET",
      url: "/gallery/user-endpoint",
    },
  },
  userMessage: {
    create: {
      method: "POST",
      url: "/user-message"
    }
  }
};
