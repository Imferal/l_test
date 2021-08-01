import { AppStateType } from '../../redux/state';
import { connect } from 'react-redux';
import { setPageLimit } from '../../redux/booksReducer';
import { Button, ButtonGroup, Container } from 'react-bootstrap';

type Props = {
  pageLimit: number
  pageLimitVariants: Array<number>
  setPageLimit: (pageLimit: number) => void
}

const PageLimitFilter = (props: Props) => {



  return (
    <Container className="px-0 pt-3">
      <span className="justify-content-md-center">Вывести на странице: </span>
      <ButtonGroup size="sm" aria-label="Сколько книг будет показано на странице">
        {
          props.pageLimitVariants.map((limit) => {
            return <Button onClick={() => props.setPageLimit(limit)} variant={limit === props.pageLimit ? "primary" : "primary-outline"}>{limit}</Button>
          })
        }
      </ButtonGroup>
    </Container>
  )
}

const mapStateToProps = (state: AppStateType) => {
  return {
    pageLimit: state.books.pageLimit,
    pageLimitVariants: state.books.pageLimitVariants
  }
}

export default connect(mapStateToProps, { setPageLimit })(PageLimitFilter)