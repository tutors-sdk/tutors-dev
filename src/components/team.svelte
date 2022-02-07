<script>

let team = [
  { 
    name: "Eamonn de Leastar",
    github: "https://github.com/edeleastar",
    avatar: "https://avatars.githubusercontent.com/u/557508?s=70&v=4"
  },
  { 
    name: "Colm Dunphy",
    github: "https://github.com/cdunphy",
    avatar: "https://avatars.githubusercontent.com/u/26001100?s=70&v=4"
  },
  {
    name: "Jordan Harrison",
    github: "https://github.com/jordharr",
    avatar: "https://avatars.githubusercontent.com/u/76656637?s=70&v=4"
  },
  {
    name: "Emma Kidney",
    github: "https://github.com/ekidneyrh",
    avatar: "https://avatars.githubusercontent.com/u/87311656?s=70&v=4"
  },
  {
    name: "Ellen O'Carrol",
    github: "#",
    avatar: "https://ca.slack-edge.com/TCLNFMT45-U028ZUHFELT-6f212632b977-512"
  },
  {
    name: "Pete Windle",
    github: "#",
    avatar: "https://ca.slack-edge.com/TEL752280-UEN0YN2NT-a2e16b2824c2-192"
  }
]
</script>

<div class="unitcard-container">
  <div class="card-body">
    <h2 class="card-title">Contributors</h2>
    <div class="flex flex-wrap justify-center">
      {#each team as member}
        <a href={member.github} target="_blank">
          <div class="card card-side text-center shadow-2xl bg-base-100 w-56 m-2">
            <div>
              <div class="avatar">
                <div class="rounded-full mt-1 ml-1 w-14 h-14 shadow"><img src={member.avatar}></div>
              </div>
            </div>
            <div class="ml-4 mt-6">
              <h2 class="card-title text-sm">{member.name}</h2>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>