package models

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var DB *gorm.DB
var err error

func ConnectDataBase() {
	DB, err = gorm.Open("sqlite3", "test.db")
	if err != nil {
		fmt.Println(err.Error())
		panic("failed to connect database")
	}
	fmt.Print("connected successfully")
	//defer DB.Close()

	// Migrate the schema
	DB.AutoMigrate(&User{}, &Category{}, &Product{})
}
