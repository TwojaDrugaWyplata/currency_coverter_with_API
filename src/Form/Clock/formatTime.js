const dateTemplate = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

export const formatTime = (time) => {
    return time.toLocaleDateString(undefined, dateTemplate)
};