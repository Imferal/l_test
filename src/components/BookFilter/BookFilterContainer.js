import { connect } from "react-redux"
import BookFilter from "./BookFilter"

const mapStateToProps = (state) => {
  return {
    genres: state.genres.genres
  }
}

export default connect(mapStateToProps)(BookFilter)