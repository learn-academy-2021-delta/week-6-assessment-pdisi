# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) * defining a class called BlogPostsController which likely came from a generate command, inhereting from the application controller 

#According to the syllabus this is where the "shape" of the database comes into fruition. I am looking at the class Dog < ApplicationRecord example. For this one ApplicationController is now directly connected to the class and can be called up on separately.
class BlogPostsController < ApplicationController
  #All of these are mostly setting up CRUD actions.
  def index
    # ---2) * defining an instance variable called posts, which is holding an Active Record query and returning all instances of BlogPost

    #This .all will show everything that falls under BlogPost. I believe this is the same functionality as SELECT * FROM x in SQL. This is establishing the class index.
    @posts = BlogPost.all
  end

  def show
    # ---3) * defining an instance variable holding an Active Record query finding one item from the BlogPost db by getting an id from the params in the url

    #using find with the parameter of :id will specifically find and select an object that the user wants to work with.
    @post = BlogPost.find(params[:id])
  end

  # ---4) * defining a method called new that return a form

  # Creates a  new model Post, which can then be saved based on given parameters.
  def new
    @post = Post.new
  end

  def create
    # ---5) * defining an instance variable to create a new instance of BlogPost calling the blog_post_params strong params method

    # We can use the .create method to create and save comments. It automatically links a comment to the given post. Then it sends the user back to the post_path that the redirect is indicating.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) * defining a method that calls restful route that displays a form for updating information

  #find method is searching for a specific paramter [:id] then we are passing in an update class.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])

    # ---7) * instance variable of one item in the database modifying a record and being passed blog_post_params which is the strong param method call

    #This is how we can edit the blog post params and give them a function. Here we are using conditionals to redirect the user to the proper location. It also includes the destroy class that is redirecting the user to blog_posts_path if the parameter they are working in is destroyed.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) * routing to the show page

      #I believe this just redirects the user to the specified path after the condition of not destroying is met.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) * Everything beloew this line cannot be accessed outside the scope of this class

  #I believe private is an extra security layer that prevents potential threats from modifying the established code.
  private
  def blog_post_params

    # ---10) * User is only allowed to update the title and content of columns in the blog_post table

    #I think these are the requirements for modification within the private settings. Having difficulty with verifying this.
    params.require(:blog_post).permit(:title, :content)
  end
end

#Notes on process: This whole week on Rails has been difficult for me because I am struggling with keeping interested on it. My appreciation for Javascript and React has grown significantly from this experience, so I am appreciative of that. I will attempt to give Rails more of my focus as I wouldn't want to close any doors that could potentially be enjoyable later on.