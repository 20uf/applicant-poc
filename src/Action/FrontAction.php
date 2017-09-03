<?php

/*
 * This file is part of the Certificationy Applicant project.
 *
 * (c) Michael COULLERET <michael.coulleret@gmail.com>
 * (c) Mickaël Andrieu <andrieu.travail@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Applicant\Action;

use Interop\Http\ServerMiddleware\DelegateInterface;
use Interop\Http\ServerMiddleware\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\HtmlResponse;

/**
 * Api action.
 */
class FrontAction implements MiddlewareInterface
{
    public function process(Request $request, DelegateInterface $delegate): HtmlResponse
    {
        return new HtmlResponse('
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>applicant</title>
              </head>
              <body>
                <div id="app"></div>
              </body>
            </html>
        ');
    }
}
