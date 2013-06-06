try:
    from .secrets import *
except ImportError:
    import sys
    sys.exit('secrets.py settings file not found. Please run `prepare.sh` to create one.')

from .base import *

#
# Put production server environment specific overrides below.
#

DEBUG = False
TEMPLATE_DEBUG = False

COWRY_RETURN_URL_BASE = 'https://production.onepercentclub.com'
