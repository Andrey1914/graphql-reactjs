export const styles = (theme) => ({
  search: {
    position: "relative",
    width: "100%",
    display: "flex",
    paddingLeft: theme.spacing(10),
  },
  searchIcon: {
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    left: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    width: "100%",
  },
});
