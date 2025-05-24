 type GithubActivityProps = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

 type GithubYear = number | 'last'

 type GithubApiResponse = {
  total: {
    [year: number]: number
    [year: string]: number // 'lastYear;
  }
  contributions: Array<GithubActivityProps>
}

 type GithubApiErrorResponse = {
  error: string
}