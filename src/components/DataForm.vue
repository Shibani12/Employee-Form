<template>
  <div class="wrapper">
    <!-- <div class="sidebar"> -->
    <div class="container" :class="{ show: showSidebar }">
      <div class="control">
        <i class="fas fa-angle-double-right" @click="showNav"></i>
      </div>
      <div class="navigation-icons">
        <i class="fas fa-home"></i>
        <i class="fas fa-user-circle"></i>
      </div>

      <div class="navigation-links">
        <transition-group name="fade">
          <div v-show="showLink" key="1">Home</div>
          <div v-show="showLink" key="2">User</div>
        </transition-group>
      </div>
    </div>

    <div class="form1">
      <nav class="navbar">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <span class="align-left control"><a>Test Application</a></span>
          <span class="align-left"><a></a></span>
          <span class="align-left"><a></a></span>
          <span class="align-left"><a></a></span>
          <span class="align-left"><a></a></span>
          <span class="align-left"><a></a></span>
          <span class="align-left"><a></a></span>
        </div>
      </nav>

      <form>
        <div class="format1">
          <div class="row">
            <div class="col">
              <label for="exampleFormControlInput1"
                >Employee First Name
                <input
                  type="text"
                  class="form-control"
                  id="text1"
                  placeholder="First name"
                  v-model="firstName"
                />
              </label>
            </div>
            <div class="col">
              <label for="exampleFormControlInput2"
                >Employee Last Name
                <input
                  type="text"
                  class="form-control"
                  id="text2"
                  placeholder="Last name"
                  v-model="lastName"
                />
              </label>
            </div>
            <div class="col">
              <button
                type="button"
                id="addbtn"
                class="btn btn-primary btn-space btn1"
                @click="addValueToTable"
              >
                Add
              </button>
            </div>
          </div>

          <!-- <div>
      <button type="button" class="btn btn-primary btn-space">Add</button>
  </div> -->

          <table id="tabledata" class="table table-bordered">
            <thead class="col1">
              <tr>
                <th scope="col" id="sr" class="control">Sr No.</th>
                <th scope="col" id="nam" class="control">First Name</th>
                <th scope="col" id="lst" class="control">Last Name</th>
                <th scope="col" id="act" class="control">Action</th>
              </tr>
            </thead>
            <!-- <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Shibani</td>
                <td>568</td>
                <td>
                  <button type="button" class="btn btn-danger btn-space">
                    Delete
                  </button>
                  <button type="button" class="btn btn-primary btn-space">
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>xyz</td>
                <td>569</td>
                <td>
                  <button type="button" class="btn btn-danger btn-space">
                    Delete
                  </button>
                  <button type="button" class="btn btn-primary btn-space">
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>mno</td>
                <td>570</td>
                <td>
                  <button type="button" class="btn btn-danger btn-space">
                    Delete
                  </button>
                  <button type="button" class="btn btn-primary btn-space">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody> -->
            <tbody>
              <tr v-for="(item, idx) in tabledata" :key="idx">
                <td v-if="editting === idx">
                  <input type="text" v-model="item.SrNo" />
                </td>
                <td v-else>{{ item.SrNo }}</td>
                <td v-if="editting === idx">
                  <input type="text" v-model="item.firstName" />
                </td>
                <td v-else>{{ item.firstName }}</td>
                <td v-if="editting === idx">
                  <input type="text" v-model="item.lastName" />
                </td>
                <td v-else>{{ item.lastName }}</td>
                <td v-if="editting === idx">
                  <button
                    type="button"
                    class="btn btn-danger btn-space"
                    @click="saveTheData(item)"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-space"
                    @click="editting = null"
                  >
                    Cancel
                  </button>
                </td>
                <td v-else>
                  <button
                    type="button"
                    class="btn btn-danger btn-space"
                    @click="deleteTheData(idx)"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-space"
                    @click="editTheData(idx)"
                  >
                    Edit
                  </button>
                </td>
                <!-- and so on -->
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showSidebar: false,
      showLink: false,
      firstName: null,
      lastName: null,
      editting: null,
      tabledata: [
        // { SrNo: 1, firstName: "xyz", lastName: "xyz" },
        // { SrNo: 2, firstName: "mno", lastName: "mno" },
      ],
    };
  },
  methods: {
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 500);
      } else {
        this.showSidebar = true;
        setTimeout(() => {
          this.showLink = true;
        }, 500);
      }
    },

    getMax(arr, prop) {
      var max;
      for (var i = 0; i < arr.length; i++) {
        if (!max || parseInt(arr[i][prop]) > parseInt(max[prop])) max = arr[i];
      }
      return max;
    },

    addValueToTable() {
      // alert(this.firstName + " " + this.lastName);
      if (!this.firstName) {
        alert("Please provide First name!");
      } else if (!this.lastName) {
        alert("Please provide last name!");
      } else {
        var result = this.tabledata.filter(
          (x) => x.firstName === this.firstName && x.lastName === this.lastName
        );
        console.log(result);
        if (result.length > 0) {
          alert("This value is already available..");
        } else {
          var maxSr = 0;
          if (this.tabledata.length == 0) {
            maxSr = 0;
          } else {
            var maxValue = this.getMax(this.tabledata, "SrNo");
            maxSr = maxValue.SrNo;
          }

          this.tabledata.push({
            SrNo: maxSr + 1,
            firstName: this.firstName,
            lastName: this.lastName,
          });
          this.firstName = null;
          this.lastName = null;
        }
      }
    },

    deleteTheData(idx) {
      // alert(idx);
      this.tabledata.splice(idx, 1);
    },
    editTheData(idx) {
      // alert("You have clicked edit button");
      this.editting = idx;
    },
    saveTheData(item) {
      if (item.firstName === "" || item.lastName === "") {
        return;
      }
      this.$emit("edit:item", item);
      this.editting = null;
    },
    // canceldata() {
    //   editting = null;
    // },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  position: relative;
}

.wrapper .form1 {
  width: 2500px;
  height: 100vh;
  margin-left: 80px;
  // background-image: linear-gradient(white, rgb(140, 140, 213));
}
.navbar {
  background-color: #4549bb;

  .control {
    color: #fff;
  }
}

.btn {
  margin-right: 20px;
}

.btn1 {
  margin-top: 70px;
}

.form-control {
  height: 50px;
  margin-top: 5px;
  margin-left: 10px;
  margin-bottom: 20px;
}
.j {
  color: #fff;
}

label {
  color: #110e0c;
  font-weight: bold;
  display: block;
  width: 150px;
  float: center;
  margin-left: 80px;
  margin-top: 50px;
}

.col1 {
  background-color: #0f1014;

  .control {
    color: #fff;
  }
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  padding: 10px;
  min-height: calc(100vh - 20px);
  background-color: rgba($color: #4549bb, $alpha: 8);
  border: solid #fff;
  border-width: 0 3px 0 0;
  z-index: 999;
  transition: all 0.5s ease-in-out;

  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-bottom: 10px;

    i {
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
    }
  }

  &.show {
    width: 180px;

    .control > i {
      color: #fff;
      transform: rotateZ(-180deg);
    }
  }
  .navigation-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50px;
    float: left;

    i {
      font-size: 2rem;
      padding: 10px 0;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      &:hover {
        color: #fff;
      }
    }
  }
  .navigation-links {
    padding: 14px;
    float: left;

    div {
      font-size: 1.35rem;
      padding-left: 10px;
      margin-bottom: 18px;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }
}

@mixin nav-childs($values...) {
  @each $var in $values {
    &:nth-child(#{$var}) {
      transition: transform linear calc(0.1s * #{$var}), display 0.5s;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  @include nav-childs(1, 2, 3, 4, 5);
}
.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
</style>
