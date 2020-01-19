import React, { ReactElement } from 'react'
import s from './Networks.module.css'
import { ReactComponent as LikeDisable } from 'assets/like_disable.svg'
import { connect } from 'react-redux'
// import { ReactComponent as LikeActive } from 'assets/like_active.svg'

interface Props {
  networks: any[]
}

const Networks = (p: Props): ReactElement => {
  return (
    <div>
      {
        p.networks.map(network => {
          return (
            <div className={s.item} key={network.id}>
              <div className={s.like}>
                { <LikeDisable /> }
              </div>
              <div className={s.name}>  
                {network.id}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// })

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
// })

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Networks)