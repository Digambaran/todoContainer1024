import React from 'react'
import { useFederatedComponent } from 'yah-js-sdk'

const TodoItem1024 = (props) => {
  const system = {
    url: `${process.env.BLOCK_ENV_URL_todoItem1024}/remoteEntry.js`,
    scope: 'todoItem1024',
    module: './todoItem1024',
  }

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
    system?.url,
    system?.scope,
    system?.module,
    React
  )

  // console.log(FederatedComponent);
  return (
    <React.Suspense fallback={''}>
      {errorLoading ? `Error loading module "${module}"` : FederatedComponent && <FederatedComponent {...props} />}
    </React.Suspense>
  )
}

export default todoItem1024
