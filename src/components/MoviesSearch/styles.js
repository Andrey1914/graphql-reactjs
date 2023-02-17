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
    color: "inherit",
    width: "100%",
    height: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(10),
  },
});
