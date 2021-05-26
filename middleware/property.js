export default function ({ store, route, redirect }) {
  if (
    route.path === '/dashboard/proprietes' ||
    route.path === '/dashboard/proprietes/'
  )
    return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
}
