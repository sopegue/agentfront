export default function ({ route, redirect }) {
  if (route.query.id !== null && route.query.id !== undefined) {
    if (!route.query.id.includes(' ')) {
      if (!isNaN(route.query.id) && !route.query.id.includes('.')) {
        if (route.query.id === '') {
          return redirect('/dashboard/proprietes/mes-proprietes')
        }
      } else return redirect('/dashboard/proprietes/mes-proprietes')
    } else return redirect('/dashboard/proprietes/mes-proprietes')
  } else return redirect('/dashboard/proprietes/mes-proprietes')
}
