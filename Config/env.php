<?php

return 
[
    /*
     * Set the running environment
     * development - The system is running development mode
     * production - The system is running in production mode
     * maintainance - The system is running in maintainace mode
     * testing - The system is running in testing mode with much errors being shown
     */
    'ENVIRONMENT' => 'development',
    
	/*
	 * Set debugging level
	 * 0 - Turn off debugging. Show "Something went wrong" message ambiguously
	 * 1 - Show simple error message, file and the line occured
	 * 2 - Advanced debugging with code snippet, stack frames, and envionment details
	 */
	'DEBUG' => 2,
	
	/*
	 * Display the time taken to complete current request. See the bootstrap.php file
	 */
	'SHOW_EXECUTION_TIME' => true
];