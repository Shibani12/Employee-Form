<template>
<div class="Form">
    <!-- Navbar 1st attempt
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> -->
<!-- 2nd attempt -->
<!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
    
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  
  </div>
</nav> -->



<!-- 3rd attempt success navbar -->
<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-light p-4">
    <h5 class="text-dark h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      
    </button>
    <span class="align-left"><a>Test Application</a></span>
    <span class="align-left"><a></a></span>
    <span class="align-left"><a></a></span>
    <span class="align-left"><a></a></span>
    <span class="align-left"><a></a></span>
    <span class="align-left"><a></a></span>
    <span class="align-left"><a></a></span>
  </div>
</nav>

<!-- <div class="relative flex min-h-screen">
  <div class="bg-cyan-600 text-cyan-100">Sidebar</div>
  <div>
    <div>Header</div>
    <div>Content</div>
  </div>
</div> -->
<!-- <sidebar-menu :menu="menu" /> -->

<!-- <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Employee Name</label>
    <input type="empname" class="form-control" id="exampleFormControlInput1" placeholder="Employee Name">
    <label for="exampleFormControlInput2">Employee ID</label>
    <input type="empid" class="form-control" id="exampleFormControlInput2" placeholder="Emplyee ID">
  </div>
</form> -->

<!-- <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
  <b-form-input id="input-2" v-model="form.name" placeholder="Enter name" required></b-form-input>
</b-form-group> -->

<form>
  <div class="row">
    <div class="col">
      <label for="exampleFormControlInput1">Employee Name
      <input type="text" class="form-control" placeholder="First name">
    </label>
    </div>
    <div class="col">
      <label for="exampleFormControlInput2">Employee ID
      <input type="text" class="form-control" placeholder="Last name">
    </label>
  </div>
  
  <div>
      <button type="button" class="btn btn-primary btn-space">Add</button>
  </div>


    <table class="table table-bordered">
      <thead>
    <tr>
      <th scope="col">Sr No.</th>
      <th scope="col">Name</th>
      <th scope="col">ID</th>
      <th scope="col">Action</th>
    </tr>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Shibani</td>
      <td>568</td>
      <td>
        <button type="button" class="btn btn-danger btn-space">Delete</button>
        <button type="button" class="btn btn-primary btn-space">Edit</button>
      </td>
    </tr>
    </tbody>
  </thead>
    </table>
    
  </div>
</form>

</div>



</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      menu: [
        {
          header: "Main Navigation",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user",
        },
        {
          href: "/charts",
          title: "Charts",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/charts/sublink",
              title: "Sub Link",
            },
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn-space {
  margin-right: 8px;
}
</style>
