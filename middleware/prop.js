export default function ({ store, route, redirect }) {
  if (route.query.tri === null || route.query.tri === undefined)
    return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
  if (route.query.bed === null || route.query.bed === undefined)
    return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
  if (
    route.query.tri !== null &&
    route.query.tri !== undefined &&
    ![
      'plus-recent',
      'prix-croissant',
      'prix-decroissant',
      'plus-ancien',
    ].includes(route.query.tri)
  )
    return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
  if (route.query.p_min !== null && route.query.p_min !== undefined) {
    if (!route.query.p_min.includes(' ')) {
      if (!isNaN(route.query.p_min) && !route.query.p_min.includes('.')) {
        if (route.query.p_min === '') {
          return redirect(
            '/dashboard/proprietes/mes-proprietes?tri=plus-recent'
          )
        }
      } else
        return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
    } else
      return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
  }
  if (route.query.p_max !== null && route.query.p_max !== undefined) {
    if (!route.query.p_max.includes(' ')) {
      if (!isNaN(route.query.p_max) && !route.query.p_max.includes('.')) {
        if (route.query.p_max === '') {
          return redirect(
            '/dashboard/proprietes/mes-proprietes?tri=plus-recent'
          )
        }
      } else
        return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
    } else
      return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
  }

  if (route.query.s_min !== null && route.query.s_min !== undefined) {
    if (!route.query.s_min.includes(' ')) {
      if (!isNaN(route.query.s_min) && !route.query.s_min.includes('.')) {
        if (route.query.s_min === '') {
          return redirect(
            '/dashboard/proprietes/mes-proprietes?tri=plus-recent'
          )
        }
      } else
        return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
    } else
      return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
  }
  if (route.query.s_max !== null && route.query.s_max !== undefined) {
    if (!route.query.s_max.includes(' ')) {
      if (!isNaN(route.query.s_max) && !route.query.s_max.includes('.')) {
        if (route.query.s_max === '') {
          return redirect(
            '/dashboard/proprietes/mes-proprietes?tri=plus-recent'
          )
        }
      } else
        return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
    } else
      return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
  }

  if (route.query.bed !== null && route.query.bed !== undefined) {
    if (!route.query.bed.includes(' ')) {
      if (!isNaN(route.query.bed) && !route.query.bed.includes('.')) {
        if (route.query.bed === '') {
          return redirect(
            '/dashboard/proprietes/mes-proprietes?tri=plus-recent'
          )
        }
      } else
        return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
    } else
      return redirect('/dashboard/proprietes/mes-proprietes?tri=plus-recent')
  }
}
