package controllers

import (
	"backend/models"
	"backend/utils/token"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CustomUser struct {
	First_name string `json:"first_name" binding:"required"`
	Last_name  string `json:"last_name" binding:"required"`
	Email      string `json:"email" binding:"required"`
	Password   string `json:"password" binding:"required"`
}

type LoginInput struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

// RegisterAccount    godoc
// @Summary          Create Account
// @Description      Create Eshop Account
// @Param            register body CustomUser true "create account"
// @Produce          application/json
// @Tags             customuser
// @Success          200 {object} nil
// @Router           /api/register [post]
func Register(c *gin.Context) {
	var input CustomUser
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user := models.User{}
	user.First_name = input.First_name
	user.Last_name = input.Last_name
	user.Email = input.Email
	user.Password = input.Password
	_, err := user.SaveUser()

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "registered successfully"})
}

// ShowActiveUser    godoc
// @Summary          Show Authenticated User
// @Description      Authenticated User
// @Produce          application/json
// @Tags             customuser
// @Success          200 {object} nil
// @Router           /api/auth/user [get]
func CurrentUser(c *gin.Context) {

	user_id, err := token.ExtractTokenID(c)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	u, err := models.GetUserByID(user_id)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "success", "data": u})
}

// RegisterAccount    godoc
// @Summary          Login Users
// @Description      Login User
// @Param            register body LoginInput true "Login"
// @Produce          application/json
// @Tags             customuser
// @Success          200 {object} nil
// @Router           /api/login [post]
func Login(c *gin.Context) {
	var input LoginInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user := models.User{}
	user.Email = input.Email
	user.Password = input.Password

	token, err := models.LoginCheck(user.Email, user.Password)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid email or password"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}

func LoginAdmin(c *gin.Context) {
	var input LoginInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user := models.User{}
	user.Email = input.Email
	user.Password = input.Password

	token, err := models.LoginCheckAdmin(user.Email, user.Password)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid email or password"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}
